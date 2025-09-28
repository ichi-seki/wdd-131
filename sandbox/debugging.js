const PI = 3.14;
let radius = 3;
let area = 0;
function calulateArea(radius) {
    const area = radius * radius * PI;
    return area;
}
area = calulateArea(radius);
console.log('Area with radius ' + radius + ' is ' + area);
radius = 4;
area = calulateArea(radius);
console.log('Area with radius ' + radius + ' is ' + area);