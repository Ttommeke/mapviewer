
var Utils = {

};

Utils.setXYZ = function( toCopyTo, toCopy) {
    toCopyTo.x = toCopy.x;
    toCopyTo.y = toCopy.y;
    toCopyTo.z = toCopy.z;
};

Utils.stringHexToHex = function(stringHex) {
    return parseInt(stringHex, 16);
};
