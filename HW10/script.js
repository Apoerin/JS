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
    /**
     * @param {Point} center
     */
    class Shape {
        constructor(center) {
            this.center = center;
        }
    }

    /**
     * @param {Point} center
     * @param {points[]} points
     */
    class Polygon {
        constructor(center, points) {
            this._center = center;
            this._points = points;
        }
        /**
         *
         * @return {number}
         */
        perimeter() {
            let sum = 0;
            if (this._points.length >= 4) {
                for (let i = 0; i < this._points.length - 1; i++) {
                    sum += this._points[i].getDistance(this._points[i + 1]);
                }
            }
            return sum;
        }
    }

    class Rectangle {
        constructor(center, width, height) {
            this._center = center;
            if (this._points.length === 4) {
                this._width = this._points[0].getDistance(this._points[1]);
                this._height = this._points[1].getDistance(this._points[3]);
            }
            else if (this._points.length !== 4) {
                throw new Error('rectangle should have 4 sides');
            }
        }
        /**
         *
         * @return {number}
         */
        get area() {
            return (this._width * this._height);
        }
        /**
         *
         * @return {number}
         */
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

    /**
     * @param {Point} center
     * @param {number} radius
     */
    class Circle {
        constructor(center, radius) {
            this._center = center;
            this._radius = radius;
        }
        /**
         *
         * @return {number}
         */
        get area() {
            return (this._radius * this._radius) * Math.PI;
        }
        /**
         *
         * @returns {number}
         */
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

    let point = new Point(1,1);
    let points = [point1, point2, point3, point4];
    let point1 = new Point(2,5);
    let point2 = new Point(5,8);
    let point3 = new Point(8,3);
    let point4 = new Point(3,2);
    let shape = new Shape(point);
    let polygon = new Polygon(shape,points);
    let rectangle = new Rectangle(shape,width,height);
    let square = new Square(shape,width);
    let circle = new Circle(shape,7);

    console.log(shape);
    console.log(polygon);
    console.log(rectangle);
    console.log(square);
    console.log(circle);
});
