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
document.addEventListener('DOMContentLoaded', () => {
    class Shape {
        /**
         * @param {Point} center
         */
        constructor(center) {
            this._center = center;
        }
    }

    class Polygon {
        /**
         * @param {Point} center
         * @param {Point[]} points
         */
        constructor(center, points) {
            this._center = center;
            this._points = points;
        }
        /**
         *
         * @return {number}
         */

        get perimeter() {
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
        /**
         * @param {Point} center
         * @param {number} width
         * @param {number} height
         */
        constructor(center, width, height) {
            this._center = center;
            this._width = width;
            this._height = height;
            if (this._points.length !== 4) {
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
            return (this._width + this._height) * 2;
        }
    }

    class Square extends Rectangle {
        /**
         * @param {Point} center
         * @param {number} width
         */
        constructor(center, width) {
            super(center, width, width);
            this._center = center;
            this._width = width;
        }
    }

    class Circle {
        /**
         * @param {Point} center
         * @param {number} radius
         */
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
         * @return {number}
         */
        get perimeter() {
            return (Math.PI * this._radius) * 2;
        }
    }

    class Point {
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }

        get x() {
            return this._x;
        }

        get y() {
            return this._y;
        }

        getPointAtOffset(x1, y1) {
            return new Point(this.x + x1, this.y + y1);
        }

        getDistance(point) {
            return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
        }
    }

    Shapes = {
        Shape,
        Polygon,
        Rectangle,
        Square,
        Circle,
        Point,
    };

    const point = new Point(1, 1);
    const point1 = new Point(2, 5);
    const point2 = new Point(5, 8);
    const point3 = new Point(8, 3);
    const point4 = new Point(3, 2);
    const points = [point1, point2, point3, point4];
    const shape = new Shape(point);
    const polygon = new Polygon(shape, points);
    const rectangle = new Rectangle(shape, 12, 19);
    const square = new Square(shape, 19);
    const circle = new Circle(shape, 7);

    console.log(shape);
    console.log(polygon);
    console.log(rectangle);
    console.log(square);
    console.log(circle);
});
