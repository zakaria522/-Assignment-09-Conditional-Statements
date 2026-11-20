
// Assignment # 9 - User Input & Conditional Statements

// Q8 (a)
var a = 4;

if (++a === 5) {
    console.log("given condition for variable a is true");
}


// Q8 (b)
var b = 82;

if (b++ === 83) {
    console.log("given condition for variable b is true");
}


// Q8 (c)
var c = 12;

if (c++ === 13) {
    console.log("condition 1 is true");
}

if (c === 13) {
    console.log("condition 2 is true");
}

if (++c < 14) {
    console.log("condition 3 is true");
}

if (c === 14) {
    console.log("condition 4 is true");
}


// Q8 (d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    console.log("The cost equals");
}


// Q8 (e)
if (true) {
    console.log("True");
}

if (false) {
    console.log("False");
}


// Q8 (f)
if ("car" < "cat") {
    console.log("car is smaller than cat");
}


// Q9: Student Grade Calculator
var totalMarks = Number(prompt("Enter total marks:"));

var subject1 = Number(prompt("Enter marks of subject 1:"));
var subject2 = Number(prompt("Enter marks of subject 2:"));
var subject3 = Number(prompt("Enter marks of subject 3:"));

var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + obtainedMarks);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);
console.log("Remarks: " + remarks);


// Q10: Shopping Cart Checkout
var item1 = prompt("Enter name of item 1:");
var item2 = prompt("Enter name of item 2:");

var price1 = Number(prompt("Enter price of item 1:"));
var price2 = Number(prompt("Enter price of item 2:"));

var quantity1 = Number(prompt("Enter quantity of item 1:"));
var quantity2 = Number(prompt("Enter quantity of item 2:"));

var shipping = Number(prompt("Enter shipping charges:"));

var total = (price1 * quantity1) + (price2 * quantity2) + shipping;
var discount = 0;

if (total > 2000) {
    discount = total * 0.10;
}

var finalAmount = total - discount;

console.log("Shopping Cart Receipt");
console.log("Item 1: " + item1);
console.log("Price: " + price1);
console.log("Quantity: " + quantity1);
console.log("Item 2: " + item2);
console.log("Price: " + price2);
console.log("Quantity: " + quantity2);
console.log("Shipping Charges: " + shipping);
console.log("Total Cost: " + total);
console.log("Discount: " + discount);
console.log("Final Amount: " + finalAmount);


// Q11: Guess Game
var secretNumber = 7;
var guessNumber = Number(prompt("Guess a number between 1 and 10:"));

if (guessNumber === secretNumber) {
    console.log("Bingo! Correct answer");
}
else if (guessNumber + 1 === secretNumber) {
    console.log("Close enough to the correct answer");
}
