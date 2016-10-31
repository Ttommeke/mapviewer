var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight-4);
document.body.appendChild( renderer.domElement );

var render = function() {
	requestAnimationFrame( render );

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

	renderer.setClearColor( Utils.stringHexToHex( data.clearcolor ), 1 );
});

render();
