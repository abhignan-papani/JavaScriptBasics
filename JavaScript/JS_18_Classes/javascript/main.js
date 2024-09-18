// // CLASSES //

// // classes provide a powerful way to structure and organize your code, making it more modular, reusable and maintainable.

// // Class - a blue print for creating objects with specific properties and methods.Class
// // Constructor - a method for initializing new objects
// // Attributes - data stored in an objects
// // Methods - functions that define the behaviour of the Object.
// // Inheritence - a mechanism to create new classes basesd on existing ones.
// // Encapsulation - Restricting access to certain components of an object.


// // EX : 1

// // class pizza {
// //     constructor(pizzaType, pizzaSize){
// //     this.type= pizzaType;
// //     this.size = pizzaSize;
// //     this.crust = "original";
// //     }

// //     bake() {
// //         return `here is your ${this.size} ${this.type} ${this.crust} crust pizza!`;
// //     }
// // }

// // const myPizza = new pizza("chicken", "large");
// // myPizza.type = "mutton";
// // console.log(myPizza.bake());
// // console.log(myPizza.type);





// // ex : 2 (get,set method)

// // class pizza {
// //     constructor(pizzaType, pizzaSize){
// //     this.type= pizzaType;
// //     this.size = pizzaSize;
// //     this.crust = "original";
// //     this.toppings = [];
// //     }
// //     getCrust(){
// //         return this.crust;
// //     }
// //     setCrust(pizzaCrust){
// //         this.crust = pizzaCrust;
// //     }

// //     getToppings(){
// //         return this.toppings;
// //     }
// //     setToppings(topping){
// //         this.toppings.push(topping);
// //     }

// //     bake() {
// //         console.log( `here is your ${this.size} ${this.type} ${this.crust} crust pizza!`);
// //     }
// // }

// // const myPizza = new pizza("chicken", "large");
// // myPizza.setCrust("thin");
// // myPizza.setToppings("sausage");
// // myPizza.setToppings("olives");
// // myPizza.bake();
// // console.log(myPizza.getToppings());
// // console.log(myPizza.getCrust());



// //EX: 3 // 
// // parent-child classes examples

// // class pizza  {
// //     constructor (pizzaSize) {
// //         this.size = pizzaSize;
// //         this.crust = "original";
// //     }
// //     getCrust() {
// //         return this.crust;
// //     }
// //     setCrust(pizzaCrust) {
// //         this.crust = pizzaCrust;
// //     }
// // }

// // class SpecialityPizza extends pizza {
// //     constructor(pizzaSize) {
// //         super(pizzaSize);
// //         this.type= "the works";
// //     }
// //     slice() {
// //         console.log(`our ${this.type} ${this.size} pizza has 8 slices!`);
// //     }
// // }

// // const mySpeciality = new SpecialityPizza("medium");
// // mySpeciality.slice();


// // class pizza  {
// //     constructor (pizzaSize) {
// //         this.size = pizzaSize;
// //         this.crust = "original";
// //     }
// //     getCrust() {
// //         return this.crust;
// //     }
// //     setCrust(pizzaCrust) {
// //         this.crust = pizzaCrust;
// //     }
// // }



// // example -4 //
// // you can use "._" notation to convey other developers who are reading your code that the gives properties should not be modified or changed outside of the class, then can only  be modified within the class with get and set methods. however it can be changed and accessed with dot notations. 

// // class pizza  {
// //     constructor (pizzaSize) {
// //         this._size = pizzaSize;
// //         this._crust = "original";
// //     }
// //     getCrust() {
// //         return this._crust;
// //     }
// //     setCrust(pizzaCrust) {
// //         this._crust = pizzaCrust;
// //     }
// // }


// // Factory Function //

// // function pizzaFactory(pizzaSize) {
// //     const crust = "original";
// //     const size = pizzaSize;
// //     return{
// //         bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
// //     };
// // }

// // const myPizza = pizzaFactory("small");
// // myPizza.bake();


// // latest version JS classes syntax (use # for any private properties)

// class pizza  {
//     crust = "original";
//     #sauce = "traditional";
//     #size;
//     constructor (pizzaSize) {
//         this.#size = pizzaSize;
        
//     }
//     getCrust() {
//         return this.crust;
//     }
//     setCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     }
//     hereYouGo(){
//         console.log(`Here is your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`)
//     };
// }
// const myPizza = new pizza("large");
// myPizza.hereYouGo();
// console.log(myPizza.crust);
// console.log(myPizza.#size);



