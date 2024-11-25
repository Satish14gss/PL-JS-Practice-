console.log("Hai")

var x = 5;
var y = 5;
var z = x + y;
console.log(z)

let a = 10;
let b = 10;
let c = a * b;
console.log(c)

let petrol = 110;
let disel = 110;
let total_price = petrol + disel;
console.log("The total price " + total_price)
if (disel < petrol) {
    console.log("disel cheaper than petrol is");
}
else if (disel > petrol) {
    console.log("petrol is higher cost");
}
else {
    console.log("First fuel kottinchu...");
}

let h = 5;
console.log(h / 5)

let n = 5;
console.log(5 / n)
console.log(n / 0)
console.log(0 / n)

let M = "hai";
let N = "all";
console.log(M + " " + n)
console.log(N + " " + M)

let aa = true;
let ss = false;
console.log(aa + ss)

let aa1 = false;
let ss2 = true;
console.log(aa1 + ss2)

/* var entries = 25;
 const entries =33;
 console.log(entries)  

const charging = 80;
charging = 81;
console.log(charging)  */

let D = {
    firstName: "kajal",
    lastName: "Agarwal",
    rollNo: 33
};
D.rollNo = 24;
D.colour = "white";
D.eyes = "black";
delete D.colour;
console.log(D)

let cafe = {
    item_1: "Tea",
    item_2: "Coffee",
    item_3: "V0dka",
    item_4: "Pizza",
    item_5: "Chilli Chiken"
};
console.log(cafe.item_3 + " with " + cafe.item_5)
if (cafe.item_3 && cafe.item_5) {
    console.log("Available");
}
else {
    console.log("Not Available");
}

laptops = ["hp", "dell"];
laptops.push("apple mac");
console.log(laptops)

colours = ["Black", "white", "red"];
colours[1] = ("green");
colours.push("white");
console.log(colours)

let colour = colours[6]

if (laptops[1] && colour) {
    console.log(`Dell laptop - ${colour} colour is availbe`); // $() -> template literals
}
else {
    console.log("Dell laptop - Green colour is not available");
}

let Alpha;
console.log(Alpha)

let Beta = null;
console.log(Beta)

let sub_1 = 54;
let sub_2 = 67;
let sub_3 = 88;

if (sub_1 >= sub_2) {
    console.log("Grade 3");
}
else if (sub_2 >= sub_3) {
    console.log("Grade 2");
}
else if (sub_3 >= sub_2 && sub_1) {
    console.log("Grade 1");
}
else {
    console.log("Marks not available");
}

let Train_ticket = null ;
let Age = null ;

if (Train_ticket >= 135 && Age >= 5) {
    console.log("Tickets are available;");
}
else if (Train_ticket <= 135 && Age >= 5) {
    console.log("Tickets are not available");
}
else if (Age < 5 && Age >=4) {
    console.log("Children no need to take ticket");
}
else if(Age >= 5) {
    console.log("Children need to take ticket");
}
else {
    console.log("First ticket tesko");
}
//-------//

function sampleProgram(length, breadth) {
    return length * breadth;
}
 let length = 5 ;
 let breadth = 5;
 let total_areal = sampleProgram(length, breadth);

 console.log(total_areal);

///////////

 function secondProgram(a=5, b=10, c=15) {
    return a * b + c;
 }

let total_ans = secondProgram(1, 1, 1);
console.log("The total answer is : " + total_ans);

let defaultValues = secondProgram();
console.log("The total answer with default values : " + defaultValues);

////////////////////

const usingArrow  = (x ,y , z) => (x + y * z) ;

let answer = usingArrow(10, 10, 5); // The operation statrted from left to right
console.log("answer is : " + answer);

