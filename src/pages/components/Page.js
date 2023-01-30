import * as THREE from 'three';
// import texture from './texture.jpg'


function initScene() {
  // Set up the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(180, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  // Set the size of the renderer and add it to the DOM
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create the sphere
  const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
  const texture = new THREE.TextureLoader().load('components/texture.jpg');
  const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0, 0, 0);
  scene.add(sphere);

  // Set the initial position and rotation of the camera
  camera.position.set(0, 0, 10);
  camera.lookAt(sphere.position);

  // Add event listeners for mouse scroll and move events
  document.addEventListener("wheel", onMouseWheel);
  document.addEventListener("mousemove", onMouseMove);

  // Variables to store the current panning and zoom values
  let panX = 0, panY = 0;
  let zoom = 1;

  // Function to handle the mouse scroll event
//   function onMouseWheel(event) {
//     // Update the zoom value based on the scroll delta
//     zoom += event.deltaY * 0.01;
//     zoom = Math.min(Math.max(zoom, 0.5), 2);
//     // Update the camera position
//     camera.position.set(panX, panY, 10 * zoom);
//     camera.lookAt(sphere.position);
//   }
  // Function to handle the mouse scroll event
    function onMouseWheel(event) {
        // Update the zoom value based on the scroll delta
        zoom += event.deltaY * 0.01;
        zoom = Math.min(Math.max(zoom, 0.5), 2);
        // Update the sphere position
        sphere.position.set(panX, panY, sphere.position.z + event.deltaY * 0.01);
        camera.lookAt(sphere.position);
    }
  

  // Function to handle the mouse move event
//   function onMouseMove(event) {
//     // Update the panning values based on the mouse position
//     panX = (event.clientX - window.innerWidth / 2) * 0.01;
//     panY = (event.clientY - window.innerHeight / 2) * 0.01;
//     // Update the camera position
//     camera.position.set(panX, panY, 10 * zoom);
//     camera.lookAt(sphere.position);
//   }
    // Function to handle the mouse move event
    function onMouseMove(event) {
        // Update the panning values based on the mouse position
        panX = (event.clientX - window.innerWidth / 2) * 0.01;
        panY = (event.clientY - window.innerHeight / 2) * 0.01;
        // Update the sphere rotation
        sphere.rotation.set(panX, panY, sphere.rotation.z);
    }
    

  // Render the scene
  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  render();
}

export default initScene;
