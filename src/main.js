import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(
  75, // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near clipping
  1000 // far clipping
);

// Move the camera back to "zoom out"
camera.position.set(0, 2, 6); // increase Z to zoom out more

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add light so we can see the model
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Load model
const loader = new GLTFLoader();
loader.load(
  "/corner_cafe.glb", // path to your GLTF model
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);
  },
  (xhr) => {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log(`Loading: ${percentComplete.toFixed(2)}%`);
    } else {
      console.log(`Loading: ${xhr.loaded} bytes loaded (total size unknown)`);
    }
  },
  (error) => {
    console.error("An error occurred loading the GLTF model:", error);
  }
);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  controls.update(); // required for damping or animations

  renderer.render(scene, camera);
}
animate();

// // Camera setup
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// // Renderer setup
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Cube (geometry + material)
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Lighting
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(5, 10, 7.5);
// scene.add(light);

// // Optional: Ambient light for soft fill
// const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
// scene.add(ambientLight);

// // Camera position
// camera.position.z = 5;

// // Animation loop
// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }

// animate();

// // Handle window resize (important in newer versions)
// window.addEventListener("resize", () => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
//   renderer.setSize(width, height);
// });
