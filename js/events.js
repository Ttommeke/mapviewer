
var Events = {};

Events.keys = {
    "up": false,
    "down": false,
    "left": false,
    "right": false
};

Events.keyDownEvent = function(e) {
    if (e.key == "ArrowUp") {
		Events.keys.up = true;
	} else if (e.key == "ArrowDown") {
		Events.keys.down = true;
	} else if (e.key == "ArrowLeft") {
		Events.keys.left = true;
	} else if (e.key == "ArrowRight") {
		Events.keys.right = true;
	}
};

Events.keyUpEvent = function(e) {
    if (e.key == "ArrowUp") {
		Events.keys.up = false;
	} else if (e.key == "ArrowDown") {
		Events.keys.down = false;
	} else if (e.key == "ArrowLeft") {
		Events.keys.left = false;
	} else if (e.key == "ArrowRight") {
		Events.keys.right = false;
	}
};
