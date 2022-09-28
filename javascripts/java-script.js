import * as THREE from './three-module.js'
import { GLTFLoader } from './GLTFLoader.js'
import { OrbitControls } from './OrbitControls.js'

$(document).ready(function () {
  // Правая кнопка
  $(".rightarrow").click(function () {
    if ($(".zona1").is(":visible")) {
      $(".zona1").fadeOut(600);
      setTimeout(function () {
        $(".zona2").fadeIn(600);
      }, 600);
    } else if ($(".zona2").is(":visible")) {
      $(".zona2").fadeOut(600);
      setTimeout(function () {
        $(".zona3").fadeIn(600);
      }, 600);
    } else if ($(".zona3").is(":visible")) {
      $(".zona3").fadeOut(600);
      setTimeout(function () {
        $(".zona4").fadeIn(600);
      }, 600);
    } else if ($(".zona4").is(":visible")) {
      $(".zona4").fadeOut(600);
      setTimeout(function () {
        $(".zona1").fadeIn(600);
      }, 600);
    }
  });
  $(".leftarrow").click(function () {
    if ($(".zona1").is(":visible")) {
      $(".zona1").fadeOut(600);
      setTimeout(function () {
        $(".zona4").fadeIn(600);
      }, 600);
    } else if ($(".zona2").is(":visible")) {
      $(".zona2").fadeOut(600);
      setTimeout(function () {
        $(".zona1").fadeIn(600);
      }, 600);
    } else if ($(".zona3").is(":visible")) {
      $(".zona3").fadeOut(600);
      setTimeout(function () {
        $(".zona2").fadeIn(600);
      }, 600);
    } else if ($(".zona4").is(":visible")) {
      $(".zona4").fadeOut(600);
      setTimeout(function () {
        $(".zona3").fadeIn(600);
      }, 600);
    }
  });
});

let scene;
                                            let camera;
                                            let renderer;
                                            let mesh;
                                            function init() {
                                              let container = document.querySelector('.containerpochi');
                                              //scene
                                              scene = new THREE.Scene()
                                              scene.background = new THREE.Color(0x000000);
                                              let light = new THREE.AmbientLight(0xffffff, 1.5);
                                              const dirLight = new THREE.DirectionalLight(0xefefff, 1.5);
                                              dirLight.position.set(10, 10, 10);
                                              scene.add(light);
                                              scene.add(dirLight);
                                              //camera
                                              camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000)
                                              //renderer
                                              renderer = new THREE.WebGLRenderer({ antialias: true })
                                              renderer.setSize(window.innerWidth, window.innerHeight)
                                              renderer.outputEncoding = THREE.sRGBEncoding;
                                              container.appendChild(renderer.domElement)
                                              //model
                                              {
                                                let loader = new GLTFLoader();
                                                loader.load('./img/pochi.gltf', gltf => {
                                                  mesh = gltf.scene;
                                                  mesh.traverse( child => {
                                                    if ( child.material ) child.material.metalness = 0.9;
                                                  } );
                                                  mesh.position.set(0, -350, 0);
                                                  mesh.rotation.set(0, -350, 0);
                                                  scene.add(mesh);
                                                  scene.rotation.set(0, 0, 0)
                                                  scene.rotation.x = 0;
                                                  scene.rotation.y = 0;
                                                  scene.rotation.z = 0;
                                                  animate()
                                                },
                                                function (error) {
                                                  console.log('Error: ' + error)
                                                }
                                              )
                                            }
                                            //resize
                                            window.addEventListener('resize', onWindowResize, false)
                                            function onWindowResize() {
                                              camera.aspect = window.innerWidth / window.innerHeight;
                                              camera.updateProjectionMatrix();
                                              renderer.setSize(window.innerWidth, window.innerHeight)
                                            }
                                            function animate() {
                                              requestAnimationFrame(animate)
                                              controls.update();
                                              renderer.render(scene, camera)
                                            }
                                            let controls = new OrbitControls(camera, renderer.domElement);
                                            camera.position.set( 150, 100, 0 );
                                            controls.enableDamping = true;
                                          };
                                          init();
                                        });
