//*******Declaring global and sub variables 

//var message = "in global";
//console.log("global: message = " + message);

//var a = function (){
//	var message = "inside a";
//	console.log("a: message = " + message);
//
//	function b (){
//	console.log("b: message = " + message);
//	}

//	b();
//}

//a();


//********DATA TYPES

//should be undefine

// var x;
// console.log(x);

// if (x == undefined){
// 	console.log('x is undefined');
// }

// x = 5;
// if (x == undefined){
// 	console.log('x is undefined')
// }
// else{
// 	console.log('x has been defined')
// };







//*******Language structure

// var string = "Hello";
// // string += " World";  //same as next line
// string = string + " Wolrd" //same as previous line
// console.log(string + "!");







//******* Math operator

// console.log((5 + 4) / 3);
// console.log(undefined / 5); // NaN - - Not a number

// function test1 (a){
// 	console.log (a / 5);
// }

// test1();  // NaN - - Not a number







//*********** Equality

// var x = 4, y = 4;
// if (x == y){
// 	console.log("x=4 is the same as y=4");
// }

// x = "4";
// if (x == y){
// 	console.log("x='4' is equal to y=4");
// }





//********* Strict equality

// x = "4", y = 4;
// if (x === y){
// 	console.log("Strict: x='4' is the same as y=4")
// }
// else{
// 	console.log("Strict: x='4' is NOT equal to y=4");
// }






//****** If statement (all false)
// if ( false || null || undefined || "" || 0 || NaN){
// 	console.log('this line will never execute')
// }
// else{
// 	console.log ('All false');
// }




// //****** If statement (all true)


// if (true && 'hello' && 1 && -1 && 'false')
// 	console.log('All true');





//*********** For Loop
// var sum = 0;
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum = sum + i;
// }

// console.log ('Sum of 0 through 9 is: ' + sum);







//******* Object creation that uses dot notation for name/value pair

// var company = new Object();
// company.name = "Candid Multimedia";
// company.address = "United States";
// company.ceo = new Object()
// company.ceo.firstName= "Olawale"
// console.log("The Company's name is: " + company["name"]);
// console.log("The Company's address is: " + company["address"]);



// Better way: Object literal

// var facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		fisrtName: "Olawale",
// 		companyName: "Candid Multimedia"
// 	},
// 	address: "United States",
// 	"stock of company": 250
// };

// console.log(facebook);



// function makeMultiplier(multiplier){
// 	var myFunc = function(x){
// 		return multiplier * x;
// 	};

// 	return myFunc;
// }


// var multiplication = makeMultiplier(3)
// console.log(multiplication(10));


// var counter = 0;
// var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
// for (var i = 0; i < myArray.length; i++) {
//   counter++;
// }
// console.log(counter);















































