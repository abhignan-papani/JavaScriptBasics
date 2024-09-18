// DOM // Document Object Model 
// it is af programming interface for web documents. it represents the page so that programs can change the the document structure, style and content. it represents the documents as tree of nodes. each node can be an element, attribute, text or the type of nodes. the tree starts with a root node which is typiclly the document object.

// Node types 
// - Element nodes - represents HTML elements - (<div>, <p>, <a>)
// - Attribute nodes - represents attributes of HTML elements - ('id', 'class')
// - Text nodes - text content inside HTMl elements
// - comment nodes - represent comments within the document

// DOM provides methods and properties to interact with document structure, style and content. this allows developers to dynamically manipulate the document in response to user actions, data changes or the events. 

// Main purpose of DOM 
// 1. Document Navigation - you can move through the tree and access specific nodes of the tree nodes using methods like 
//  getElementById(), querySelector(), getElementByClassName(), querySelectorAll(), getElementByTagName() etc

// 2. Manipulation - Enables dynamic changes to the documents content and structure. yo can create, delete or modify elements and their attributes using methods like 
// createElement(), innerHTML(), appendChild(), removeChild(), setAttribute() etc

// 3. Event Handling - supports handling errors, allowing developers to respond to user interactions like clicks, keypresses and mouse movements. you can add event listeners to elements using - " addEventListeners() "

// 4. Styling - allows dynamic changes to the document style. you can modify css properties directly through the "style" property of the elements - " style"


// EX-1

//- let us assume there are 2 views - view1 and view2, 1 nav, 12 identical divs in a section in our web page. 
// let see how we can select the elements in the DOM in console, change the content, changing the style, removing and adding new properties to our web page

// document.getElementById("view1"); -gives all HTML connections which has elements inside of it. this is used when you need to quickly and directly select an element by its unique ' id ' . it requies the id value as its argument. only accepts id and must match an elements unique id attribute.

// document.querySelector("#view2"); - gives list of nod, nodelist which has node, in HTML, nodes are everything. there are more nodes than elements in a web page.  used for selecting the first which matches the css selector. the selector can be an "(#id), (.class), or any valid selector". makes it more versitile but petentially slower. 

// document.getElementsByClassName("view"); 
// document.querySelectorAll(".view");

// const divs = view.querySelectorAll(".view");
// const samedivs = view.getElementsByTagName("view");

// const evenDivs = view.querySelectorAll("div: nth-of-type(2n)");
// for(i=0; i< evenDivs.length; i++){
//     evenDivs[i].style.backgroundColor = "";
//     evenDivs[i].style.length = " ";
//      "            "
// }
// above is the example that how you can alter every little bit of the web page that you want to, by altering styles, chanage in apperence.


// to show / hide th content of the web page we use (.style.display = none/flex;)
    // "id/section etc" . style.display = "none/ flex" ;

// to change the texts ( . textContent)
//  file.textContent = "text";
// console.log(file);

// to overide everything ( .innerHTML)
// file.innerHTML= <h1> ... </h1>
// console.log(file);

// textContent only changs the text node and is not adding any HTML to the page but with innerHTML property we can directly add/insert HTML, which will overide everything.


// Navigationg the DOM tree 

// console.log(evenDivs[0]);
// console.log(evenDivs[0]. parentElement);
// console.log(evenDivs[0].parentElement. children); 
// console.log(evenDivs[0].parentElement. childNodes);
// console.log(evenDivs[0].parentElement. haschildNodes());
// console.log(evenDivs[0].parentElement. lastChild)'
// console.log(evenDivs[0].parentElement. lastElementChild);
// console.log(evenDivs[0].parentElement. firstChild);
// console.log(evenDivs[0].parentElement. firstElement);
// console.log(evenDivs[0].nextSibbing);
// console.log(evenDivs[0].nextElementSibbling);
// console.log(evenDivs[0].previousSibbling/ previousElementSibbling);
// you can chain the above properties to navigate the DOM as you want if you need 


// we can create/ add new elements and remove existing elements in the page but to add you need to create a function with parameters and need to call it 

// remove -

// while( view2.lastchild){
//     view2.lastchild.remove();
// }

// add-

// const createDiv (parent, Iter) => {
//     const newDiv = document.createElement("div");
//     newDiv.textContent = Iter;
//     newDiv.style.backgroundColor = #000;
//     newDiv.style. width = "100px";
//     "        "
//     parent.append(newDiv);
// }
// createDiv(view2, 10);
 // the above will create a new single div and if you want to have more divs then you can do it by looping method

// for(let i=0; i<12; i++){
//     createDiv(view2, i);
// } //this will create 12 new identical divs.


















  








