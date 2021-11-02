let scene, camera, renderer, sphereCamera;
function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
  camera.position.set(-900,-200,-900);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);

  renderer.shadowMapEnabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;

  document.body.appendChild(renderer.domElement);

  //create floor
  let plane = new THREE.Mesh(
    new THREE.PlaneGeometry(20000, 20000, 300, 300),
    //new THREE.ShadowMaterial()
    new THREE.MeshPhongMaterial({color: 0xFFFFFF})
  );
  //plane.castShadow = true;
  plane.receiveShadow = true;
  plane.rotation.x = -Math.PI/2;
  scene.add(plane);

  //create object
  const homeMat = new THREE.MeshPhongMaterial({color: 0xff9d40});
  const roofMat = new THREE.MeshPhongMaterial({color: 0xffd5ad});
  const homeGeo = new THREE.BoxGeometry(13, 2, 13);
  const roofGeo = new THREE.ConeGeometry(3, 0.5, 32);

  for(let x=0; x<15; ++x) {
    for(let y=0; y<15; ++y) {
      const home = new THREE.Mesh(homeGeo, homeMat);
      const roof = new THREE.Mesh(roofGeo, roofMat);
      home.scale.set(20, (Math.random()+1.0)*100.0, 20);
      home.position.set(
        15000.0*(Math.random()*2.0 - 1.0),
        home.scale.y,
        15000.0*(Math.random()*2.0 - 1.0)
      );
      roof.scale.copy(home.scale);
      roof.scale.set(100, home.scale.y*5.0, 100);
      roof.position.set(
        home.position.x,
        roof.scale.y/2,
        home.position.z
      );
      home.castShadow = true;
      home.receiveShadow = false;
      roof.castShadow = true;
      roof.receiveShadow = false;

      scene.add(home);
      scene.add(roof);
    }
  }

  //add realistic reflection effect


  //add fog
  //scene.background = new THREE.Fog(0xDFE9F3, 1000, 5000);

  //set light
  let light = new THREE.DirectionalLight(0xffffff, 1.0);
  light.position.set(0, 70, 100);
  light.castShadow = true;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 25;
  scene.add(light);

  alight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(alight);

  //set control
  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', renderer);
  controls.target.set(0, 20, 0);
  controls.maxDistance = 10000;
  
  //add texture for skybox
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
  scene.add(skybox);

  animate();
}

function animate() {
  renderer.render(scene,camera);
  //sphereCamera.updateCubeMap(renderer, scene);
  requestAnimationFrame(animate);
}
init();
