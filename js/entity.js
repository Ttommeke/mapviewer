
var Entity = {

};

Entity.createCube = function( myColor, scale, pos, rotation) {

    pos = pos || new THREE.Vector3( 0, 0, 0 );
    rotation = rotation || new THREE.Vector3( 0, 1, 0 );

    var geometry = new THREE.BoxGeometry( scale.x, scale.y, scale.z );
    var material = new THREE.MeshStandardMaterial( { color: myColor } );
    var cube = new THREE.Mesh( geometry, material );
    Utils.setXYZ(cube.position, pos);
    Utils.setXYZ(cube.rotation, rotation);

    return cube;
};

Entity.generateEntity = function(id, x, y, z) {

    if (id === 1) {
        return Entity.createCube(0x00FF00, new THREE.Vector3( 1, 1, 1 ), new THREE.Vector3( x, y, z ), new THREE.Vector3(0,0,0));
    } else if (id === 2) {
        return Entity.createCube(0x0000FF, new THREE.Vector3( 1, 1, 1 ), new THREE.Vector3( x, y, z ), new THREE.Vector3(0,0,0));
    } else {
        return undefined;
    }
}
