let scene, camera, renderer;
function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
  camera.position.set(-900,-200,-900);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);

  renderer.shadowMap.enabled = true;
  //renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  document.body.appendChild(renderer.domElement);

  let plane = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100, 1, 1),
    new THREE.MeshStandardMaterial({color: 0xFFFFFF})
  );
  
  plane.castShadow = false;
  plane.receiveShadow = true;
  plane.rotation.x = -Math.PI/2;
  scene.add(plane);

  let box = new THREE.Mesh(
    new THREE.BoxGeometry(10, 10, 10),
    new THREE.MeshStandardMaterial({color: 0xf7f6ab})
  );

  box.position.set(0, 10, 0);
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);

  let sphere = new THREE.Mesh(
    new THREE.SphereGeometry(6, 10, 6),
    new THREE.MeshStandardMaterial({color: 0x91ffaf})
  );

  sphere.position.set(20, 10, 20);
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  scene.add(sphere);

  //scene.fog = new THREE.Fog(0xDFE9F3, 0.0, 500.0);
  scene.background = new THREE.Fog(0xDFE9F3,0.5);

  let light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( 100, 50, 100 );
  light.target.position.set(0, 0, 0);
  light.castShadow = true;
  //light.shadow.mapSize.width = 2048;
  //light.shadow.mapSize.height = 2048;
  scene.add(light);

  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', renderer);
  //controls.minDistance = 500;
  //controls.maxDistance = 1500;
  
  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load( 'trance_ft.jpg');
  let texture_bk = new THREE.TextureLoader().load( 'trance_bk.jpg');
  let texture_up = new THREE.TextureLoader().load( 'trance_up.jpg');
  let texture_dn = new THREE.TextureLoader().load( 'trance_dn.jpg');
  let texture_rt = new THREE.TextureLoader().load( 'trance_rt.jpg');
  let texture_lf = new THREE.TextureLoader().load( 'trance_lf.jpg');
    
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));

  for (let i = 0; i < 6; i++)
      materialArray[i].side = THREE.BackSide;
  let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
  let skybox = new THREE.Mesh( skyboxGeo, materialArray );
  scene.add( skybox );  
  animate();
}

function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
init();