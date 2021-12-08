//alert("Hola I'm Alex here");

//function declaration




//function expression stored in a variable const

// const speak = function() {
//     console.log('good day!');
// };

// speak();
// speak();


//EX.1----HOISTING FUNCTION-CALLED DIFFERENT TIMES----//
//call or invoking the function on the console also above rather than below the same function
// greet(1); //<--put the number inside curved brackets 
// greet(2);
// greet(3);


// //function declaration ONLY CAN BE HOISTED
// function greet() {

//     console.log("Hello there");
// }




//EX.2----ARGUMENTS & PARAMETERS----//

// const speak = function(name = 'luigi', time = 'night') {
//     console.log(`good ${time} ${name}`) //<--template string with ``
// };

// speak();
// speak('shaun', 'day'); //<---overight value on the function





//EX.3----RETURNING VALUES FROM REGULAR FUNCTIONS----//

// const calcArea = function(radius) {

//     return 3.14 * radius ** 2; //<---that's a local variable --- (squared ===> '**2')

// }

// const area = calcArea(5); //<---global scope variable

// console.log(area);





//EX.4----ARROW FUNCTION----//

// const calcArea = (radius) => { // if you want to simplify the function when has got just one parameter you can writeparameter without parentesis -exemple: const calcArea = radius => { 

//     return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log('area is:', area);


//EX.4.A----SIMPLIFY ARROW FUNCTION----//
// const calcArea = radius => 3.14 * radius ** 2; // simplified arrow function



// const area = calcArea(5);
// console.log('area is:', area);


//EX.5----PRACTISE ARROW FUNCTION----//

//Regular Function
// const greet = function() {
//     return 'hello world';

// };

//Arrow Function simplified
// const greet = () => 'hello world';
// const result = greet();
// console.log(result);



//----FUNCTION----//
//declare constant for the function 
// const bills = function(products, tax) { //<---define parameter inside the parentesis

//     //initialize variable total
//     let total = 0;

//     //define the loop througthout the array of products
//     for (let i = 0; i < products.length; i++) {

//         total += products[i] + products[i] * tax; //
//     }
//     return total;

// }

// console.log(bills([10, 15, 30], 0.2)) //<---declare the 1st argument as array of products prices inside squared parentesis[10, 15, 30] and the 2nd argument outside the as tax price.


//----COVERT THE FUNCTION ABOVE IN ARROW FUNCTION----//


// const bills = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bills([10, 30, 35], 0.2));




//EX.6----FUNCTION ARRAYS METHOD----//

//declare constant
// const name = 'shaun';

// //arrow function

// const greet = () => "hello!";

// let resulOne = greet();
// console.log(resulOne);

// //methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);




//EX.7----CALLBACKS & FOREACH----//
//--callback function--//
// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };

//--function.1 as a property of function above--//
// myFunc(function(value) {
//     //do something
//     console.log(value);
// });

//--function.1 as a property convert in arrow functcion--//

// myFunc(value => {
//     //do something
//     console.log(value);
// });


//--ARRAY METHOD-FOR EACH-//

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach(function(person) {
//     console.log(person);
// });


//---CONVERT FUNCTION ABOVE IN ARRAY CALLBACK FUNCTION---//

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }


// people.forEach(logPerson); //<--pass a method as an argument




//EX.8--GET A REFERENCE TO THE 'UL'--//--Check HTML file!!

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];


let html = ``;

people.forEach(person => {

    //create html template
    html += `<li style ="color: purple">${person}</li>`;

});

console.log(html);

ul.innerHTML = html;