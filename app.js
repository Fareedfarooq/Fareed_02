// chapter no 1

// Q1

var city=prompt("Enter your city")

if (city === "karachi" ){
    alert("Welcome to city of lights"
        )
}
else{
    alert("sorry")
}


// Q2

var gendar = prompt("Enter Your Gender")

if (gendar === "male"){
    alert("Good morning Sir")
}

else if (gendar === "Female"){
    alert("Good Morning Ma'am.")
}

else{
    alert("oK")
}

// Q3

var fa1 = prompt("Enter your Signal color")

if(fa1 === "Red"){
    alert("Must Stop")
}

else if(fa1 === "Yellow"){
    alert("Ready to move")
}

else if(fa1 === "Green"){
    alert("Move now")
}

else("Thanks")


// Q4

var fuel = prompt("Enter your current fuel")

if (fuel === " 0.25litres"){
    alert("Please refill the fuel in your car")
}

else if( fuel <= "0.25litres"){
    alert("Please foucs a driving")
}

// Q5

 var a = 4;
if (++a === 5){
alert("true")
}

var b = 82;
if (b++ === 83){
alert("Fales")
}

var c = 12;
if (c++ === 13){
alert("Fales");
}
if (c === 13){
alert("true");
}
if (++c < 14){
alert("true");
}
if(c === 14){
alert("true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("42000");
}
if (true) {
    alert("true")
}

if ("car" < "cat") {
    alert("car is smaller than cat")
}

// Q6

var firstSubject = +prompt("Enter your first subject number")

var secondSubject = +prompt("Enter your second subject number")

var thirdSubject = +prompt("Enter your third subject number")

var totalMarks = +prompt("Enter your total subject marks")

var obtMarks = firstSubject + secondSubject + thirdSubject

var percantage = (obtMarks / totalMarks) * 100;




if (percantage >= 80 && percantage <= 100) {
    alert("<b>" + "Marks Sheets" + "<b>" + "<br>" + "<br>" + "Total Marks:" + totalMarks + "<br>" + "Marks Obatined:" + obtMarks + "<br>" + "Percantage:" + percantage + "<br>" + "Grade : A+" + "<br>" + "Remarks : Exellent")
}

else if (percantage >= 70 && percantage <= 80) {
    document.write("<b>" + "Marks Sheets" + "<b>" + "<br>" + "<br>" + "Total Marks:" + totalMarks + "<br>" + "Marks Obatined:" + obtMarks + "<br>" + "Percantage:" + percantage + "<br>" + "Grade : A" + "<br>" + "Remarks : Good")
}

else if (percantage >= 60 && percantage <= 70) {
    document.write("<b>" + "Marks Sheets" + "<b>" + "<br>" + "<br>" + "Total Marks:" + totalMarks + "<br>" + "Marks Obatined:" + obtMarks + "<br>" + "Percantage:" + percantage + "<br>" + "Grade : B" + "<br>" + "Remarks : You need to improve")
}

else if (percantage <= 60) {
    document.write("<b>" + "Marks Sheets" + "<b>" + "<br>" + "<br>" + "Total Marks:" + totalMarks + "<br>" + "Marks Obatined:" + obtMarks + "<br>" + "Percantage:" + percantage + "<br>" + "Grade : Fail" + "<br>" + "Remarks : Sorry")
}

else{
    alert("Please enter your correct marks")
}

// Q7

var game = +prompt("Enter the Secret number")

if (game >=1 && game <= 9) {
    alert("Bingo! Correct")
}

else{
    alert("Close Enough to the correct answer")
}

// Q8

var check = +prompt("Even or odd number cheker machine")

if(check % 2 === 0){
    alert("Even number")
}
else if(check % 3 === 0){
    alert("odd number")
}

else{
    alert("na hi even number hai or na hi odd number hai..")
}

// Q9

var temperature = +prompt("Temperature machine")

if (temperature >= 40) {
    alert("It is to hot outside..")
}

else if (temperature >= 30) {
    alert("The Weather  today is Normal")
}

else if (temperature >= 20) {
    alert("Today's Weather is Cool..")
}

else if (temperature >= 10) {
    alert("OMG! Today's weather is so cool..")
}

else {
    alert("please enter your temperature 10 to 50 ok..")
}

// Q10

var num1 = +prompt("Enter your number")

var opertor = prompt("Enter your opertor")

var num2 = +prompt("Enter your number")

if (opertor === "+") {
    alert(num1 + num2)
}

else if (opertor === "-") {
    alert(num1 - num2)
}

else if (opertor === "/") {
    alert(num1 / num2)
}

else if (opertor === "*") {
    alert(num1 * num2)
}

else{
    alert("Please enter your correct number or character")
}

