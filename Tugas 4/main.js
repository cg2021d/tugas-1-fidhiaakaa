let scene, camera, renderer, sphereCamera;
      function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight,45,30000);
        camera.position.set(-900,-200,-900);

        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;

        document.body.appendChild(renderer.domElement);

        //control
        let controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', renderer);
        controls.target.set(0, 20, 0);
        controls.maxDistance = 5000;
        //controls.enableZoom = false;

        //ground
        let plane = new THREE.Mesh(
          new THREE.PlaneGeometry(20000, 20000, 500, 500),
          new THREE.MeshPhongMaterial({color: 0xffffff})
        );
        plane.rotation.x = -Math.PI*0.5;
        plane.position.set(0, 0, 0);
        plane.receiveShadow = true;
        scene.add(plane);

        //object
        let homeMat = new THREE.MeshPhongMaterial({color: 0xff9d40});
        let roofMat = new THREE.MeshPhongMaterial({color: 0xffd5ad});
        let homeGeo = new THREE.BoxGeometry(13, 2, 13);
        let roofGeo = new THREE.ConeGeometry(3, 0.5, 32);

        for(let x=0; x<10; ++x) {
          for(let y=0; y<10; ++y) {
            let home = new THREE.Mesh(homeGeo, homeMat);
            let roof = new THREE.Mesh(roofGeo, roofMat);
            home.scale.set(20, (Math.random()+1.0)*100.0, 20);
            home.position.set(
              9000.0*(Math.random()*2.0 - 1.0),
              home.scale.y,
              9000.0*(Math.random()*2.0 - 1.0)
            );
            roof.scale.copy(home.scale);
            roof.scale.set(100, home.scale.y*5.0, 100);
            roof.position.set(
              home.position.x,
              roof.scale.y/2,
              home.position.z
            );
            home.castShadow = true;
            home.receiveShadow = true;
            roof.castShadow = true;
            roof.receiveShadow = true;

            scene.add(home);
            scene.add(roof);
          }
        }

        //light
        let light = new THREE.DirectionalLight(0xffffff, 1.0);
        light.position.set(0, 70, 100);
        light.castShadow = true;
        //light.shadow.camera.near = 0.1;
        //light.shadow.camera.far = 25;
        scene.add(light);
        

        alight = new THREE.AmbientLight(0xffffff, 0.3);
        alight.castShadow = true;
        scene.add(alight);

        //skybox
        let urls = [
          'trance_ft.jpg', 'trance_bk.jpg',
          'trance_up.jpg', 'trance_dn.jpg',
          'trance_rt.jpg', 'trance_lf.jpg'
        ];
        let loader = new THREE.CubeTextureLoader();
        scene.background = loader.load(urls);

        sphereCamera = new THREE.CubeCamera(1,1000,500);
        sphereCamera.position.set(0,300,0);
        scene.add(sphereCamera);

        //realistic reflection
        let sphereMaterial = new THREE.MeshBasicMaterial({
          envMap: sphereCamera.renderTarget
        });
        let sphereGeo = new THREE.SphereGeometry(350,50,50);
        let sphere = new THREE.Mesh(sphereGeo,sphereMaterial);
        sphere.position.set(0,1000,0);
        scene.add(sphere);

        render();
      }
      function render() {
        renderer.render(scene,camera);
        sphereCamera.updateCubeMap(renderer,scene);
        requestAnimationFrame(render);
      }
      init();
