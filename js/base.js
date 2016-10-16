var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xabf3fc, 1 );
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

$.getJSON("map.json", function(data) {
	var emap = Map.generateMapFromNumberMap(data.map);
	Map.loadMapInScene(emap, scene);
});

scene.add(Light.createDirectionalLight(Light.WHITE, 0.6, new THREE.Vector3( 1, 1, 1)));
scene.add(Light.createHemisphereLight(0xffffff, 0xffffFF, 0.4));

camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 1;

var render = function() {
	requestAnimationFrame( render );

	//camera.rotation.y += 0.005;

	renderer.render( scene, camera );
}

render();
