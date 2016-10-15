
var Light = {
    WHITE: 0xFFFFFF,
    FULL_STRENGTH: 1
};

Light.createDirectionalLight = function(color, strength, pos ) {
    var directionalLight = new THREE.DirectionalLight( color, strength );
    Utils.setXYZ(directionalLight.position, pos);
    return directionalLight;
}

Light.createHemisphereLight = function( colorSky, colorGround, strength) {
    var hemiLight = new THREE.AmbientLight( colorSky, colorGround, strength);
    return hemiLight;
};
