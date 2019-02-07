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
        constructor(center: Point) {
            this._center = center;
        }
    }

    class Polygon {
        constructor(center: Point, points: Array<Point>) {
            this._center = center;
            this._points = points;
        }

        get perimeter():number {
            let sum:number = 0;
            if (this._points.length >= 4) {
                for (let i = 0; i < this._points.length - 1; i++) {
                    sum += this._points[i].getDistance(this._points[i + 1]);
                }
            }
            return sum;
        }
    }

    class Rectangle {
        constructor(center: Point, width: number, height: number) {
            this._center = center;
            this._width = width;
            this._height = height;
            if (this._points.length !== 4) {
                throw new Error('rectangle should have 4 sides');
            }
        }

        get area():number {
            return (this._width * this._height);
        }

        get perimeter():number {
            return (this._width + this._height) * 2;
        }
    }

    class Square extends Rectangle {
        constructor(center: Point, width: number) {
            super(center, width, width);
            this._center = center;
            this._width = width;
        }
    }

    class Circle {
        constructor(center: Point, radius: number) {
            this._center = center;
            this._radius = radius;
        }

        get area():number {
            return (this._radius * this._radius) * Math.PI;
        }

        get perimeter():number {
            return (Math.PI * this._radius) * 2;
        }
    }

    class Point {
        constructor(x: number, y: number) {
            this._x = x;
            this._y = y;
        }

        get x():number {
            return this._x;
        }

        get y():number {
            return this._y;
        }

        getPointAtOffset(x1: number, y1: number) {
            return new Point(this.x + x1, this.y + y1);
        }

        getDistance(point: Point):number {
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
