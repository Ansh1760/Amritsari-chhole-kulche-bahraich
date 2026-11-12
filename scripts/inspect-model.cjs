const fs = require('fs');
const path = require('path');
const THREE = require('three');
const { GLTFLoader } = require('three/examples/jsm/loaders/GLTFLoader.js');

// Mock browser globals for Node.js GLTFLoader
if (typeof window === 'undefined') {
  global.window = {};
  global.self = {};
}

const modelPath = path.join(__dirname, '..', 'public', 'models', 'kulchaaa (1).glb');

if (!fs.existsSync(modelPath)) {
  console.error("File does not exist:", modelPath);
  process.exit(1);
}

const fileBuffer = fs.readFileSync(modelPath);
const arrayBuffer = fileBuffer.buffer.slice(fileBuffer.byteOffset, fileBuffer.byteOffset + fileBuffer.byteLength);

const loader = new GLTFLoader();

loader.parse(
  arrayBuffer,
  '',
  (gltf) => {
    console.log("Successfully loaded GLTF!");
    const scene = gltf.scene;

    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);

    const center = new THREE.Vector3();
    box.getCenter(center);

    console.log("--- Bounding Box Info ---");
    console.log("Min:", box.min);
    console.log("Max:", box.max);
    console.log("Size (X, Y, Z):", size);
    console.log("Center (X, Y, Z):", center);

    console.log("\n--- Scene Hierarchy & Meshes ---");
    scene.traverse((child) => {
      if (child.isMesh) {
        const meshBox = new THREE.Box3().setFromObject(child);
        const meshSize = new THREE.Vector3();
        meshBox.getSize(meshSize);
        console.log(`Mesh: "${child.name}", Vertices: ${child.geometry.attributes.position ? child.geometry.attributes.position.count : 'N/A'}`);
        console.log(`  Mesh Size: [${meshSize.x.toFixed(4)}, ${meshSize.y.toFixed(4)}, ${meshSize.z.toFixed(4)}]`);
        console.log(`  Mesh Position: [${child.position.x}, ${child.position.y}, ${child.position.z}]`);
        console.log(`  Mesh Rotation: [${child.rotation.x}, ${child.rotation.y}, ${child.rotation.z}]`);
        console.log(`  Mesh Scale: [${child.scale.x}, ${child.scale.y}, ${child.scale.z}]`);
        if (child.material) {
          const mat = Array.isArray(child.material) ? child.material[0] : child.material;
          console.log(`  Material Type: ${mat.type}, Name: "${mat.name}", Has Map: ${!!mat.map}`);
        }
      }
    });
  },
  (err) => {
    console.error("Error parsing GLTF:", err);
  }
);

