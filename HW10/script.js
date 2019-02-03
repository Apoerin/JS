/** Завдання створити класи:
 *    фігура:
 *      координати:
 *      х, у
 *
 *    багатокутник -> фігура:
 *      вершини[координати],
 *      периметр()
 *
 *    прямокутник -> багатокутник:
 *      довжина,
 *      висота,
 *      площа(),
 *      периметр()
 *
 *    квадрат -> прямокутник:
 *      довжинаСторони,
 *      площа(),
 *      периметр()
 *
 *    круг -> фігура:
 *      радіус,
 *      площа(),
 *      периметр()
 */
document.addEventListener('DOMContentLoaded', function () {
    class Shape {
        constructor(center) {
            this.center = center;
        }
    }

    class Polygon {
        constructor(center, points) {
            this._center = center;
            this._points = points;
        }

    }

    class Rectangle {
        constructor(center, width, height) {
            this._center = center;
            this._width = width;
            this._height = height;
        }
        get area() {
            return (this._width * this._height);
        }
        get perimeter() {
            return (this._width + this._height) *2;
        }
    }

    class Square extends Rectangle {
        constructor(center, width) {
            super(center, width, width);
            this._center = center;
            this._width = width;
        }
    }

    class Circle {
        constructor(center, radius) {
            this._center = center;
            this._radius = radius;
        }
        get area() {
            return (this._radius * this._radius) * Math.PI;
        }
        get perimeter() {
            return (Math.PI * this._radius) *2;
        }
    }

    class Point {
        get x() {
            return this._x;
        }

        get y() {
            return this._y;
        }

        constructor(x, y) {
            this._x = x;
            this._y = y;
        }

        getPointAtOffset(x1, y1) {
            return new Point(this.x + x1, this.y + y1);
        }

        getDistance(point) {
            return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
        }
    }

    Shapes = {
        Shape: Shape,
        Polygon: Polygon,
        Rectangle: Rectangle,
        Square: Square,
        Circle: Circle,
        Point: Point
    };

    let point = new Point(x,y);
    let points = [point1, point2, point3, point4];
    let shape = new Shape(point);
    let polygon = new Polygon(shape,points);
    let rectangle = new Rectangle(shape,width,height);
    let square = new Square(shape,width);
    let circle = new Circle(shape, radius);

    console.log(shape);
    console.log(polygon);
    console.log(rectangle);
    console.log(square);
    console.log(circle);
});
