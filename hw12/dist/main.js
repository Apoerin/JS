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

/**
 *
 * @param d
 * @param b
 * @returns {*}
 */
var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *
 * @type {Shape}
 */
var Shape = /** @class */ (function () {
    function Shape(center) {
        this._center = center;
    }
    return Shape;
}());
/**
 *
 * @type {Polygon}
 */
var Polygon = /** @class */ (function () {
    function Polygon(center, points) {
        this._center = center;
        this._points = points;
    }
    Object.defineProperty(Polygon.prototype, "perimeter", {
        get: function () {
            var sum = 0;
            if (this._points.length !== 4) {
                throw new Error('polygon should have at least 4 sides');
            }
            if (this._points.length >= 4) {
                for (var i = 0; i < this._points.length - 1; i++) {
                    sum += this._points[i].getDistance(this._points[i + 1]);
                }
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    return Polygon;
}());
/**
 *
 * @type {Rectangle}
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(center, width, height) {
        this._center = center;
        this._width = width;
        this._height = height;
        if (this._points.length !== 4) {
            throw new Error('rectangle should have 4 sides');
        }
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return (this._width * this._height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "perimeter", {
        get: function () {
            return (this._width + this._height) * 2;
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());
/**
 *
 * @type {function(*=, *=): (*|Square)}
 */
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(center, width) {
        return _super.call(this, center, width, width) || this;
    }
    return Square;
}(Rectangle));
/**
 *
 * @type {Circle}
 */
var Circle = /** @class */ (function () {
    function Circle(center, radius) {
        this._center = center;
        this._radius = radius;
    }
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return (this._radius * this._radius) * Math.PI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "perimeter", {
        get: function () {
            return (Math.PI * this._radius) * 2;
        },
        enumerable: true,
        configurable: true
    });
    return Circle;
}());
/**
 *
 * @type {Function}
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getPointAtOffset = function (x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    };
    Point.prototype.getDistance = function (point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    };
    return Point;
}());

Shapes = {
    Shape: Shape,
    Polygon: Polygon,
    Rectangle: Rectangle,
    Square: Square,
    Circle: Circle,
    Point: Point,
};

var point = new Point(1, 1);
var point1 = new Point(2, 5);
var point2 = new Point(5, 8);
var point3 = new Point(8, 3);
var point4 = new Point(3, 2);
var points = [point1, point2, point3, point4];
var shape = new Shape(point);
var polygon = new Polygon(shape, points);
var rectangle = new Rectangle(shape, 12, 19);
var square = new Square(shape, 19);
var circle = new Circle(shape, 7);
console.log(shape);
console.log(polygon);
console.log(rectangle);
console.log(square);
console.log(circle);
