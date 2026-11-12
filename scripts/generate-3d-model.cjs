const fs = require('fs');
const path = require('path');
const THREE = require('three');
const { GLTFExporter } = require('three/examples/jsm/exporters/GLTFExporter.js');

// Polyfill minimal browser globals for Node.js GLTFExporter
if (typeof window === 'undefined') {
  global.window = {};
}

// Complete FileReader polyfill for Node.js
if (typeof FileReader === 'undefined') {
  global.FileReader = class FileReader {
    readAsArrayBuffer(blob) {
      if (blob && blob.arrayBuffer) {
        blob.arrayBuffer().then((buf) => {
          this.result = buf;
          if (this.onloadend) this.onloadend();
          if (this.onload) this.onload({ target: this });
        });
      } else {
        this.result = blob;
        if (this.onloadend) this.onloadend();
        if (this.onload) this.onload({ target: this });
      }
    }

    readAsDataURL(blob) {
      if (blob && blob.arrayBuffer) {
        blob.arrayBuffer().then((buf) => {
          const base64 = Buffer.from(buf).toString('base64');
          this.result = `data:application/octet-stream;base64,${base64}`;
          if (this.onloadend) this.onloadend();
          if (this.onload) this.onload({ target: this });
        });
      }
    }
  };
}

function createAmritsariKulchaMesh() {
  const radius = 1.45;
  const height = 0.22;
  const radialSegments = 128;
  const heightSegments = 12;

  // Cylinder geometry as base
  const geometry = new THREE.CylinderGeometry(radius, radius * 1.02, height, radialSegments, heightSegments, false);
  
  const pos = geometry.attributes.position;
  const count = pos.count;
  const colors = new Float32Array(count * 3);

  // Helper pseudo-random noise for reproducibility
  function hash(x, z) {
    const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
    return s - Math.floor(s);
  }

  // Golden wheat and roasted colors
  const colBase = new THREE.Color('#DF9E4B');       // Rich golden-brown wheat
  const colCrustLight = new THREE.Color('#F2C37A'); // Lighter roasted dough
  const colChar = new THREE.Color('#2A160C');       // Dark tandoori blister char
  const colDeepChar = new THREE.Color('#150B05');   // Deep burnt spot
  const colCoriander = new THREE.Color('#2C6B2F');  // Chopped green coriander
  const colButter = new THREE.Color('#FFD54F');     // Melted golden butter sheen

  for (let i = 0; i < count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);

    const r = Math.sqrt(x * x + z * z);
    const angle = Math.atan2(z, x);

    // 1. Handcrafted organic edge deformation (uneven circumference)
    const edgeWave = Math.sin(angle * 5) * 0.04 + Math.sin(angle * 9 + 1.2) * 0.025 + Math.cos(angle * 14) * 0.015;
    if (r > 0.01) {
      const scaleR = 1 + edgeWave * (r / radius);
      x *= scaleR;
      z *= scaleR;
    }

    // 2. Surface puffing (Amritsari kulchas puff irregularly in the clay tandoor)
    const normalizedR = Math.min(1.0, r / radius);
    const isTop = y > 0.05;
    const isBottom = y < -0.05;

    let blister = 0;
    if (isTop) {
      // Natural central puffing curve
      const domePuff = Math.cos(normalizedR * Math.PI * 0.5) * 0.12;
      
      // Irregular tandoor blister mounds
      const b1 = Math.sin(x * 6.5 + 0.8) * Math.cos(z * 6.2 - 0.4);
      const b2 = Math.sin(x * 11.0 - 1.5) * Math.cos(z * 10.5 + 2.1) * 0.5;
      const b3 = Math.sin(x * 18.0) * Math.sin(z * 18.0) * 0.25;
      blister = (b1 + b2 + b3) * 0.065 * (1 - normalizedR * 0.5);

      // Slight depression near very edge
      const edgeDip = Math.sin(normalizedR * Math.PI) * 0.02;

      y += domePuff + blister + edgeDip;
    } else if (isBottom) {
      // Flat bottom with slight tandoor wall adhesion texture
      const bBottom = Math.sin(x * 8 + z * 8) * 0.015;
      y += bBottom;
    }

    pos.setXYZ(i, x, y, z);

    // 3. Realistic coloration mapping (Crust, Charred blister spots, Coriander, Butter)
    const vertexColor = colBase.clone();

    if (isTop) {
      // Blend towards light golden crust based on height & radius
      const heightFactor = Math.min(1, Math.max(0, (y - 0.08) / 0.15));
      vertexColor.lerp(colCrustLight, heightFactor * 0.4);

      // Determine tandoori char spots at blister peaks
      const noiseVal = hash(Math.round(x * 14) * 0.1, Math.round(z * 14) * 0.1);
      const isBlisterPeak = blister > 0.03 && noiseVal > 0.55;
      const isExtremePeak = blister > 0.045 && noiseVal > 0.72;

      if (isExtremePeak) {
        vertexColor.lerp(colDeepChar, 0.95);
      } else if (isBlisterPeak) {
        vertexColor.lerp(colChar, 0.85);
      }

      // Coriander leaf speckles scattered organically
      const corianderNoise = hash(Math.round(x * 35) * 0.1, Math.round(z * 35) * 0.1);
      if (corianderNoise > 0.88 && !isBlisterPeak && normalizedR < 0.85) {
        vertexColor.lerp(colCoriander, 0.9);
      }

      // Butter pool in central gentle depression
      if (normalizedR < 0.45 && blister < 0.01 && noiseVal < 0.4) {
        vertexColor.lerp(colButter, 0.5);
      }
    } else if (isBottom) {
      // Bottom surface gets warm darker tandoor grill marks
      const bottomChar = Math.sin(x * 12 + z * 12);
      if (bottomChar > 0.4) {
        vertexColor.lerp(colChar, 0.7);
      } else {
        vertexColor.lerp(colBase, 0.6);
      }
    } else {
      // Rim / edge has nice baked dough tone
      vertexColor.lerp(colCrustLight, 0.3);
    }

    colors[i * 3] = vertexColor.r;
    colors[i * 3 + 1] = vertexColor.g;
    colors[i * 3 + 2] = vertexColor.b;
  }

  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.computeVertexNormals();

  // Premium PBR material
  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.68,
    metalness: 0.05,
    side: THREE.DoubleSide
  });

  const kulchaMesh = new THREE.Mesh(geometry, material);
  kulchaMesh.name = "AmritsariKulcha";

  // Add a rich golden butter melting dollop on top
  const butterGeo = new THREE.CylinderGeometry(0.22, 0.28, 0.04, 32);
  const butterPos = butterGeo.attributes.position;
  for (let j = 0; j < butterPos.count; j++) {
    let bx = butterPos.getX(j);
    let by = butterPos.getY(j);
    let bz = butterPos.getZ(j);
    const melt = Math.sin(bx * 15) * 0.015 + Math.cos(bz * 15) * 0.015;
    butterPos.setXYZ(j, bx + melt, by, bz + melt);
  }
  butterGeo.computeVertexNormals();

  const butterMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#FFCA28'),
    roughness: 0.2,
    metalness: 0.1
  });
  const butterMesh = new THREE.Mesh(butterGeo, butterMat);
  butterMesh.name = "MeltingButter";
  butterMesh.position.set(0.12, 0.19, -0.05);
  butterMesh.rotation.set(0.05, 0.4, -0.08);

  const group = new THREE.Group();
  group.name = "AmritsariKulchaGroup";
  group.add(kulchaMesh);
  group.add(butterMesh);

  return group;
}

// Generate and export to GLTF/GLB
const kulcha = createAmritsariKulchaMesh();
const scene = new THREE.Scene();
scene.add(kulcha);

const exporter = new GLTFExporter();

// Export binary GLB
exporter.parse(
  scene,
  (gltf) => {
    const outputGlbPath = path.join(__dirname, '..', 'public', 'models', 'amritsari-kulcha.glb');
    fs.writeFileSync(outputGlbPath, Buffer.from(gltf));
    console.log(`Successfully generated binary GLB: ${outputGlbPath} (${(fs.statSync(outputGlbPath).size / 1024).toFixed(2)} KB)`);
  },
  (error) => {
    console.error('An error occurred during export:', error);
  },
  { binary: true }
);
