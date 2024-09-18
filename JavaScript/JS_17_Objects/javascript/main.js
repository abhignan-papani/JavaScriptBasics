///    Objects   //////
// objects comes in key value pairs and those pairs are in curly braces, we can nest objects inside of the objects) //
// you use "this" as a method inside the object to call or return the values inside the objects with the method function by " `` "



// ex-1

// const myObj = {name : "abhi"};
// const anotherObj = {
//     alive : true,
//     info : ["abhignan", 25, "male"],
//     hobbies : {
//         professional : "reading books",
//         unprofessional : "producing music"
//     },
//     action : function() {
//         return `${this.info[0]} really loves ${this.hobbies.unprofessional} on his free time.`
//     }
// }

// console.log(anotherObj.hobbies.professional)
// console.log(anotherObj.action())


// ex-2 


// const vehicle = {
//     wheels : 4,
//     engine : function() {
//         return `vroomm` ;
//     }, 
//     action : function() {
//         return `let's produce some ${this.engine()} together!`;
//     }
// };
// const truck = Object.create(vehicle);
// truck.doors = 2;

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function() {
//     return "whoosh"
// };

// const tesla = Object.create(car);
// tesla.engine = function() {
//     return "shhhh !"
// }
// console.log(tesla.doors);
// console.log(tesla.engine());
// console.log(vehicle.action());
// console.log(car.action());


// // ex-3


const myMusic = {
    vocals : "amu",
    guitar : "abhi",
    bass : "buddha", 
    drums: "nishi"
};


// destructuring objects // 

// function sings({vocals}){
//     return `${vocals} sings amazing!`
// }
// console.log(sings(myMusic));

// const {vocals : myVocals} =  myMusic;
// console.log(myVocals);

// or//

// const {vocals : myVocals, guitar : myGuitar} =  myMusic;
// console.log(myVocals);
// console.log(myGuitar);

// // or //

// const {vocals, guitar, bass, drums} =  myMusic;
// console.log(vocals);
// console.log(guitar);





// delete myMusic.drums; // this is how you can remove any key-values from the object //
// console.log(myMusic.hasOwnProperty("drums")); // you can check through a boolean by using this      "("object.hasOwnProperty("key"));" that the deleted value is been deleted from the object

// console.log(Object.keys(myMusic)); // gives you all the assigned keys of the object
// console.log(Object.values(myMusic)); // gives you all the assigned values of the object

for(let apple in myMusic) {
    console.log(`on ${apple}, its ${myMusic[apple]}`);
}