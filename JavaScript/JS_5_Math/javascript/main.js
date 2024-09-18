// Math methods and properties

console.log(Math.PI);

// "Math.trunc" gives you the base number irrespective the decimal
console.log(Math.trunc(Math.PI));
console.log(Math.trunc(3.6));
console.log(Math.trunc(3.99));
console.log(Math.trunc(3.0001));

//" Math.round" gives you the result depends on the decimal value. 
console.log(Math.round(3.4));
console.log(Math.round(3.5));

// " Math.floor" gives you the floor value irrespective the decimal value.
console.log(Math.floor(3.56));
console.log(Math.floor(3.99999));
console.log(Math.floor(3.000001));

// "Math.ceil " gives you the ceil value irrespective the decimal value.
console.log(Math.ceil(0.02));
console.log(Math.ceil(3.1));
console.log(Math.ceil(3.999));

// "Math.pow (_,_);" is the power of property.
console.log(Math.pow(2,10));


// "Math.min/max()" returns the min and max values.
console.log(Math.min(2,3,4,5));
console.log(Math.max(2,3,4,5));


console.log(Math.floor(Math.random()*10)+1);
console.log(Math.ceil(Math.random()*10));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());