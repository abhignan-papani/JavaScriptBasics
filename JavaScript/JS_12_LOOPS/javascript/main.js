// ////////       loops         ///////// //
/////////////////////   WHILE LOOP     /////////////////////
// let myNumber = 0;
// while (myNumber <10){ //gives values from 0 to 9
//     console.log(myNumber);
//     myNumber = myNumber+1; // or you can write simply (myNumber++)
// }
// let myNumber = 0;
// while (myNumber <=10){ //  gives values from 0 to 10
//     console.log(myNumber);
//     myNumber = myNumber+1;
// }

// let myNumber = 4;
// while (myNumber <=10){
    
//     console.log(myNumber);
//     myNumber+= 0.5
// }



// let myNumber = 0;
// while (myNumber <10){
//     myNumber++; // if you use this before console.log then the +1 add to the while loop before the console.log
//     console.log(myNumber);
    
// }

// let myNumber = 0;
// while (myNumber <10){
//     console.log(myNumber);
//     myNumber+= 2 ; // you can add any number by += 'number'
// }


//////////////////// dont create an endless loop ???????????????????



///////////// DO-WHILE LOOP //////////////////


// let myNumber = 60;
// while (myNumber < 50){
//     myNumber++ ;
//     console.log(myNumber);
// }

// do {
//     console.log(myNumber);
// }   while(myNumber < 50)


// if you just use while loop, sometimes there wont be any output for the given value. therefore you use do-while loop. so, that the given funtion atleast run once no matter what the condition is inside the do-while loop.


///////////////////// FOR LOOP ??????????????????



let myName = "abhi";
for(i=2; i<= myName.length; i++){
    console.log(myName.charAt(i));
}


// let name = "abhi";
// let counter = 0;
// let myLetter;
// while (true) {
//     myLetter= name[counter];
//     console.log(myLetter);
//     // if (counter ==1) {
//     //     counter+2;
//     //     continue;
//     // }
//     if (myLetter === "i") break;
//     counter++;
// }




// let name = "abhi";
// let counter = 0;
// let myLetter;
// while (counter <= 6) {
//     myLetter= name[counter];
//     console.log(myLetter);
//     if (counter ===1) {
//         counter+=2;
//         continue;
//     }
//     if (myLetter === "h") break;
//     counter++;
// }
// console.log(counter);