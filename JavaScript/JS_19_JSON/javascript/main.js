// JSON // JavaScript Object Notation //
// it is used to send and receive data
// it is a text format that is completely language independent
// when you want to send your object to someone in the JSON format. it will change all the key value properties into string format upon stringify and discard all the functions or the methods after sending JSON object. upon parse again, it will again change the given string back to object with discarding the functions.(arrays upon parsing just show the length but not the values inside the array)

const myObj = {
    name: "abhi",
    hobbies: ["eat", "sleep", "music"],
    hello: function () {
        console.log("hello");
    }
}

console.log(myObj);

const sendJSON = JSON.stringify(myObj);// "json.stringify" is used to send the given object into json format but all the properties in the json will be converted into string and all the functions and the methods in object will be discarded //
console.log(sendJSON);

const receiveJSON = JSON.parse(sendJSON); // "json.parse" is used to parse the given json format back to the object.
console.log(receiveJSON);