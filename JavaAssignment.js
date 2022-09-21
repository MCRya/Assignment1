const PI = 3.14;

//Circle area
var r = 5;

var area = (PI*r)^2;
console.log("Circle Area = " + area);

//Circle circumference
var r = 8

var circumference = 2*PI*r;
console.log("Circle Circumference = " + circumference);

//Rectangle area
var l = 7;
var w = 4;

var area = l*w;
console.log("Rectangle area = " + area);

//Triangle area
var b = 11;
var h = 5;

var area = (b*h);
area = area * 0.5;
console.log("Triangle Area = " + area);

//Equilateral Triangle Area 
var a = 4;
var b = 11;

var asq = (a^2);
var bsq = (b^2);
var csq = (asq + bsq) / 2;
var area = csq
console.log("Equilateral Triangle Area = " + area) // Wrong answer i think. 

//3D Rectangle
var l = 10;
var w = 13;
var h = 8;

var volume = (l*w*h);
console.log("3D Rectangle = " + volume);

//3D Cylinder
var r = 12
var h = 5

var volume = (PI*(r^2)*h);
console.log("3D Cylinder = " + volume);

//3D Sphere
var r = 4;

var volume = PI*(r^3);
volume = volume * (4/3);
console.log("Sphere volume = " + volume);
