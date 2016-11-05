var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight-4);
document.body.appendChild( renderer.domElement );
var TimeClock = new THREE.Clock();
var fpsCounter = new Stats();
fpsCounter.showPanel(0);
document.body.appendChild( fpsCounter.dom );

var render = function() {
	fpsCounter.begin();
	var deltaTime = TimeClock.getDelta();

	if (Player.player != undefined) {
		Player.executeKeys(deltaTime);
		Camera.moveCamera(Camera.camera, Player.player.position, deltaTime, Camera.speed);
	}

	renderer.render( scene, Camera.camera );
	fpsCounter.end();

	requestAnimationFrame( render );
}

$.getJSON("map.json", function(data) {
	var emap = Map.generateMapFromNumberMap(data.map);
	Map.loadMapInScene(emap, scene);

	Camera.speed = data.cameraSpeed;
	Camera.setCameraPositionAndRotation(Camera.camera, data.cameras[0]);

	data.lights.forEach(function(light) {
		scene.add(Light.generateLight(light));
	});

	Player.player = Living.generateLiving(data.player);
	scene.add(Player.player);

	renderer.setClearColor( Utils.stringHexToHex( data.clearcolor ), 1 );
});

TimeClock.getDelta();
render();
