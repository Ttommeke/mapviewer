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
		Player.executeKeys(Player.player, deltaTime);
		Player.turnTowardsVector(Player.player, Events.mouse.position);
		Camera.moveCamera(Camera.camera, Utils.newVectorToNewVector(Player.player.position,1,Events.mouse.position), deltaTime, Camera.speed);
	}

	renderer.render( scene, Camera.camera );
	fpsCounter.end();

	requestAnimationFrame( render );
}

$.getJSON("map.json", function(data) {

	Camera.speed = data.cameraSpeed;
	Camera.setCameraPositionAndRotation(Camera.camera, data.cameras[0]);

	data.lights.forEach(function(light) {
		scene.add(Light.generateLight(light));
	});

	var emap = Map.generateMapFromNumberMap(data.map);
	Map.loadMapInScene(emap, scene);

	Map.map = emap;

	renderer.setClearColor( Utils.stringHexToHex( data.clearcolor ), 1 );

	var player = Living.generateLiving(data.player);
	scene.add(player);
	Player.player = player;

	TimeClock.getDelta();
	render();
});
