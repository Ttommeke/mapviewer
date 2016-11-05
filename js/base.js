var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight-4);
document.body.appendChild( renderer.domElement );
var TimeClock = new THREE.Clock();

var render = function() {
	var deltaTime = TimeClock.getDelta();
	requestAnimationFrame( render );

	if (Player.player != undefined) {
		Player.executeKeys(deltaTime);
	}

	renderer.render( scene, camera );
}

$.getJSON("map.json", function(data) {
	var emap = Map.generateMapFromNumberMap(data.map);
	Map.loadMapInScene(emap, scene);

	Utils.setXYZ(camera.position, data.cameras[0].position);
	Utils.setXYZ(camera.rotation, data.cameras[0].rotation);

	data.lights.forEach(function(light) {
		scene.add(Light.generateLight(light));
	});

	Player.player = Living.generateLiving(data.player);
	scene.add(Player.player);

	renderer.setClearColor( Utils.stringHexToHex( data.clearcolor ), 1 );
});

TimeClock.getDelta();
render();
