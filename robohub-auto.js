toNorth ();
function toNorth () {
    if (isFree ('north')) {
        if (north () === 'end') return false;
        toEast ();
    } else {
        toWest ();
    }
};

function toEast () {
    if (isFree ('east')) {
        if (east () === 'end') return false;
        toSouth ();
    } else {
        toNorth ();
    }
};

function toSouth () {
    if (isFree ('south')) {
        if (south () === 'end') return false;
        toWest ();
    } else {
        toEast ();
    }
};

function toWest () {
    if (isFree ('west')) {
        if (west () === 'end') return false;
        toNorth ();
    } else {
        toSouth ();
    }
};
