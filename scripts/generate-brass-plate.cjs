const fs = require('fs');
const path = require('path');
const THREE = require('three');
const { GLTFExporter } = require('three/examples/jsm/exporters/GLTFExporter.js');

if (typeof window === 'undefined') {
  global.window = {};
}

// Complete FileReader polyfill for Node.js GLTFExporter
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

function createRealisticBrassPlate() {
  const points = [];
  // Traditional Indian Royal Brass Thali Profile
  // 1. Center base underside
  points.push(new THREE.Vector2(0, -0.06));
  // 2. Base bottom foot ring
  points.push(new THREE.Vector2(1.15, -0.06));
  points.push(new THREE.Vector2(1.25, -0.08));
  points.push(new THREE.Vector2(1.30, -0.05));
  // 3. Inner flat floor (slightly dished for food)
  points.push(new THREE.Vector2(1.25, -0.04));
  points.push(new THREE.Vector2(0, -0.04));
  points.push(new THREE.Vector2(1.10, -0.04));
  // 4. Stepped decorative concentric inner groove
  points.push(new THREE.Vector2(1.18, -0.035));
  points.push(new THREE.Vector2(1.22, -0.04));
  // 5. Curved transition to raised wall
  points.push(new THREE.Vector2(1.42, 0.04));
  points.push(new THREE.Vector2(1.55, 0.20));
  points.push(new THREE.Vector2(1.62, 0.32));
  // 6. Thick rolled rim bead
  points.push(new THREE.Vector2(1.68, 0.35));
  points.push(new THREE.Vector2(1.72, 0.33));
  points.push(new THREE.Vector2(1.70, 0.29));
  points.push(new THREE.Vector2(1.64, 0.26));
  // 7. Outer wall underside
  points.push(new THREE.Vector2(1.50, 0.12));
  points.push(new THREE.Vector2(1.35, -0.03));
  points.push(new THREE.Vector2(1.25, -0.06));

  const geometry = new THREE.LatheGeometry(points, 96);
  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#D8A948'),
    roughness: 0.24,
    metalness: 0.92,
    side: THREE.DoubleSide
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = "RoyalBrassPlate";
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  const group = new THREE.Group();
  group.name = "BrassPlateScene";
  group.add(mesh);

  return group;
}

const plateScene = createRealisticBrassPlate();
const exporter = new GLTFExporter();

exporter.parse(
  plateScene,
  (gltf) => {
    const outputPath = path.join(__dirname, '..', 'public', 'models', 'brass-plate.glb');
    fs.writeFileSync(outputPath, Buffer.from(gltf));
    console.log(`Generated brass-plate.glb at: ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB)`);
  },
  (error) => {
    console.error('Error generating brass-plate.glb:', error);
  },
  { binary: true }
);

