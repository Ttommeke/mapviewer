
var Player = {
    "player": undefined
};

Player.executeKeys = function(deltaTime) {

    var direction = new THREE.Vector3(0,0,0);

    if (Events.keys.up) {
        direction.z -= 1;
    }
    if (Events.keys.down) {
        direction.z += 1;
    }
    if (Events.keys.left) {
        direction.x -= 1;
    }
    if (Events.keys.right) {
        direction.x += 1;
    }

    Living.moveLiving(Player.player, deltaTime, direction, Player.player.speed);
}
