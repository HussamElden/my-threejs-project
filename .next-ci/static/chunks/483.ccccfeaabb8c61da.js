"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[483],{

/***/ 4483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThreeScene)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7876);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4232);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6691);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4796);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9497);
/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5693);
// components/ThreeScene.js





function ThreeScene() {
    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const scene = new three__WEBPACK_IMPORTED_MODULE_2__/* .Scene */ .Z58();
        // Camera setup
        const camera = new three__WEBPACK_IMPORTED_MODULE_2__/* .PerspectiveCamera */ .ubm(85, window.innerWidth / window.innerHeight, 0.1, 1000 // far clipping
        );
        // Move the camera back to "zoom out"
        camera.position.set(0, 5, 6); // increase Z to zoom out more
        // Renderer setup
        const renderer = new three__WEBPACK_IMPORTED_MODULE_3__/* .WebGLRenderer */ .JeP({
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);
        // Add light so we can see the model
        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_2__/* .AmbientLight */ .$p8(0xffffff, 4);
        scene.add(ambientLight);
        scene.background = new three__WEBPACK_IMPORTED_MODULE_2__/* .Color */ .Q1f(0x87ceeb); // SkyBlue
        // Create video texture
        const video = document.createElement("video");
        video.src = "/bamoot.mp4"; // local file, no CORS issue
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.load();
        document.addEventListener("click", ()=>{
            video.muted = false;
            video.play();
        });
        const videoTexture = new three__WEBPACK_IMPORTED_MODULE_2__/* .VideoTexture */ .Nv2(video);
        videoTexture.minFilter = three__WEBPACK_IMPORTED_MODULE_2__/* .LinearFilter */ .k6q;
        videoTexture.magFilter = three__WEBPACK_IMPORTED_MODULE_2__/* .LinearFilter */ .k6q;
        videoTexture.format = three__WEBPACK_IMPORTED_MODULE_2__/* .RGBFormat */ .HIg;
        videoTexture.center.set(0.5, 0.5); // rotate around center
        videoTexture.rotation = Math.PI / 2; // 90 degrees in radians
        const videoMaterial = new three__WEBPACK_IMPORTED_MODULE_2__/* .MeshBasicMaterial */ .V9B({
            map: videoTexture
        });
        // Load model
        const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_4__/* .GLTFLoader */ .B();
        loader.load("/cornercafe.glb", (gltf)=>{
            const model = gltf.scene;
            model.traverse((child)=>{
                if (child.isMesh && child.material && child.material.name === "Material.001") {
                    child.material = videoMaterial;
                }
            });
            scene.add(model);
        }, (xhr)=>{
            if (xhr.lengthComputable) {
                const percentComplete = xhr.loaded / xhr.total * 100;
                console.log("Loading: ".concat(percentComplete.toFixed(2), "%"));
            } else {
                console.log("Loading: ".concat(xhr.loaded, " bytes loaded (total size unknown)"));
            }
        }, (error)=>{
            console.error("An error occurred loading the GLTF model:", error);
        });
        const controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_5__/* .OrbitControls */ .N(camera, renderer.domElement);
        // LIMIT VERTICAL ROTATION (up/down)
        controls.minPolarAngle = Math.PI / 4; // 45 degrees
        controls.maxPolarAngle = Math.PI / 2; // 90 degrees
        // LIMIT HORIZONTAL ROTATION (left/right)
        controls.minAzimuthAngle = -Math.PI / 4; // -45 degrees
        controls.maxAzimuthAngle = Math.PI / 4; // 45 degrees
        // Optional extras
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;
        controls.target.set(0, 3, 1); // e.g., for a model centered at y = 2
        function animate() {
            requestAnimationFrame(animate);
            controls.update(); // required for damping or animations
            renderer.render(scene, camera);
        }
        animate();
        return ()=>{
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: mountRef
    });
}


/***/ })

}]);