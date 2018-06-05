var path = new Path();
path.strokeColor = 'red';

var start = new Point(200, 100);

path.moveTo(start);
path.lineTo(start + [ 100, -50 ]);

var myCircle = new Path.Circle(new Point(100, 70), 50);
myCircle.fillColor = 'black';