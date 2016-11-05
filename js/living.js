
var Living = {};

Living.moveLiving = function(living, deltaTime, direction, speed) {
    var length = direction.length() + 0.00000001;

    var oriPos = living.position;
    oriPos.x += direction.x/length * speed * deltaTime;
    oriPos.y += direction.y/length * speed * deltaTime;
    oriPos.z += direction.z/length * speed * deltaTime;
}

Living.generateLiving = function(living) {
    if (living.type = "human") {
        var human = Entity.createCube( 0xBB6666, new THREE.Vector3(0.8,1.4,0.8), new THREE.Vector3(living.position.x, 0.7 ,living.position.z), living.rotation)
        human.speed = living.speed;

        return human;
    }
}
