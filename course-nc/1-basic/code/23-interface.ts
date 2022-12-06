
interface Point {
    x: number;
    y: number;
}

function printCoord(pt: Point) {
    console.log('The coordinate x value is: ', pt.x);
    console.log('The coordinate y value is: ', pt.y);
}

printCoord({ x: 100, y: 100 })