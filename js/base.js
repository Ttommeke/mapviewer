var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 1;

var render = function() {
	requestAnimationFrame( render );

	camera.rotation.y -= 0.005;

	renderer.render( scene, camera );
}

$.getJSON("map.json", function(data) {
	var emap = Map.generateMapFromNumberMap(data.map);
	Map.loadMapInScene(emap, scene);

	data.lights.forEach(function(light) {
		scene.add(Light.generateLight(light));
	});

	renderer.setClearColor( Utils.stringHexToHex( data.clearcolor ), 1 );
});

render();
