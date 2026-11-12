const fs = require('fs');
const path = require('path');
const THREE = require('three');
const { GLTFExporter } = require('three/examples/jsm/exporters/GLTFExporter.js');

// Global mock for Node environment if needed
if (typeof window === 'undefined') {
  global.window = {};
}

console.log("THREE and GLTFExporter loaded successfully");

