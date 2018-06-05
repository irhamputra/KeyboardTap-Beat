var text = new PointText(new Point(50, 50));
text.fillColor = 'black';
text.fontWeight = 600;
text.fontSize = 20;

text.content = 'Keyboard Tap Beat';

var subtitle = new PointText(new Point(50, 70));
subtitle.fillColor = 'black';
subtitle.content = 'Press A to Z and turn up your speaker';

var circles = [];

var keyData = {
    q: {
        color: "#FFE4C4",
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        })
    },
    w: {
        color: "#8A2BE2",
        sound: new Howl({
            src: ['sounds/clay.mp3']
        })
    },
    e: {
        color: "#A52A2A",
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        })
    },
    r: {
        color: "#5F9EA0",
        sound: new Howl({
            src: ['sounds/corona.mp3']
        })
    },
    t: {
        color: "#DC143C",
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        })
    },
    z: {
        color: "#FF8C00",
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        })
    },
    u: {
        color: "#8FBC8F",
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        })
    },
    i: {
        color: "#00BFFF",
        sound: new Howl({
            src: ['sounds/flash3.mp3']
        })
    },
    o: {
        color: "#ADFF2F",
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        })
    },
    p: {
        color: "#F08080",
        sound: new Howl({
            src: ['sounds/moon.mp3']
        })
    },
    a: {
        color: "#90EE90",
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        })
    },
    s: {
        color: "#800000",
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        })
    },
    d: {
        color: "#191970",
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        })
    },
    f: {
        color: "#FF4500",
        sound: new Howl({
            src: ['sounds/piston-3.mp3']
        })
    },
    g: {
        color: "#DA70D6",
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        })
    },
    h: {
        color: "#DB7093",
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        })
    },
    j: {
        color: "#800080",
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        })
    },
    k: {
        color: "#2E8B57",
        sound: new Howl({
            src: ['sounds/splits.mp3']
        })
    },
    l: {
        color: "#9ACD32",
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        })
    },
    y: {
        color: "#FF6347",
        sound: new Howl({
            src: ['sounds/strike.mp3']
        })
    },
    x: {
        color: "#008080",
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        })
    },
    c: {
        color: "#8B4513",
        sound: new Howl({
            src: ['sounds/timer.mp3']
        })
    },
    v: {
        color: "#FF0000",
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        })
    },
    b: {
        color: "#000080",
        sound: new Howl({
            src: ['sounds/veil.mp3']
        })
    },
    n: {
        color: "#6B8E23",
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
        circles[i].scale(.97);
    }
}