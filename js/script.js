var circles = [];

var keyData = {
    q: {
        color: "orange",
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        })
    },
    w: {
        color: "#00FFFF",
        sound: new Howl({
            src: ['sounds/clay.mp3']
        })
    },
    e: {
        color: "green",
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        })
    },
    r: {
        color: "red",
        sound: new Howl({
            src: ['sounds/corona.mp3']
        })
    },
    t: {
        color: "orange",
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        })
    },
    z: {
        color: "#00FFFF",
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        })
    },
    u: {
        color: "green",
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        })
    },
    i: {
        color: "red",
        sound: new Howl({
            src: ['sounds/flash3.mp3']
        })
    },
    o: {
        color: "orange",
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        })
    },
    p: {
        color: "#00FFFF",
        sound: new Howl({
            src: ['sounds/moon.mp3']
        })
    },
    a: {
        color: "green",
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        })
    },
    s: {
        color: "red",
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        })
    },
    d: {
        color: "orange",
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        })
    },
    f: {
        color: "#00FFFF",
        sound: new Howl({
            src: ['sounds/piston-3.mp3']
        })
    },
    g: {
        color: "green",
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        })
    },
    h: {
        color: "red",
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        })
    },
    j: {
        color: "orange",
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        })
    },
    k: {
        color: "#00FFFF",
        sound: new Howl({
            src: ['sounds/splits.mp3']
        })
    },
    l: {
        color: "green",
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        })
    },
    y: {
        color: "red",
        sound: new Howl({
            src: ['sounds/strike.mp3']
        })
    },
    x: {
        color: "orange",
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        })
    },
    c: {
        color: "#00FFFF",
        sound: new Howl({
            src: ['sounds/timer.mp3']
        })
    },
    v: {
        color: "green",
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        })
    },
    b: {
        color: "red",
        sound: new Howl({
            src: ['sounds/veil.mp3']
        })
    },
    n: {
        color: "orange",
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        })
    },
    m: {
        color: "#00FFFF",
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        })
    },
};

function onKeyDown(e) {
    if (keyData[e.key]){
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 100);

        newCircle.fillColor = keyData[e.key].color;
        keyData[e.key].sound.play();

        circles.push(newCircle);
    }
}

function onFrame() {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 2;
        circles[i].scale(.9)
    }
}

