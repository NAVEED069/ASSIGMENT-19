var posNum = prompt("Enter a positive number:");
posNum = Number(posNum);
document.write("<h3>1. Positive Number</h3>");
document.write("Number: " + posNum + "<br>");
document.write("Round off: " + Math.round(posNum) + "<br>");
document.write("Floor: " + Math.floor(posNum) + "<br>");
document.write("Ceil: " + Math.ceil(posNum) + "<hr>");

var negNum = prompt("Enter a negative floating point number:");
negNum = Number(negNum);
document.write("<h3>2. Negative Floating Number</h3>");
document.write("Number: " + negNum + "<br>");
document.write("Round off: " + Math.round(negNum) + "<br>");
document.write("Floor: " + Math.floor(negNum) + "<br>");
document.write("Ceil: " + Math.ceil(negNum) + "<hr>");

var absNum = prompt("Enter a number for absolute value:");
document.write("<h3>3. Absolute Value</h3>");
document.write("Absolute value: " + Math.abs(absNum) + "<hr>");

var dice = Math.floor(Math.random() * 6) + 1;
document.write("<h3>4. Dice Roll</h3>");
document.write("Dice value: " + dice + "<hr>");

var coin = Math.floor(Math.random() * 2) + 1;
document.write("<h3>5. Coin Toss</h3>");
if (coin === 1) {
  document.write("Heads");
} else {
  document.write("Tails");
}
document.write("<hr>");

var rand100 = Math.floor(Math.random() * 100) + 1;
document.write("<h3>6. Random Number (1–100)</h3>");
document.write(rand100 + "<hr>");

var weight = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kilograms):");
var parsedWeight = parseFloat(weight);
document.write("<h3>7. Weight</h3>");
document.write("Your weight is " + parsedWeight + " kgs<" + "br><hr>");

var secret = Math.floor(Math.random() * 10) + 1;
var userGuess = Number(prompt("Guess a number between 1 and 10:"));
document.write("<h3>8. Secret Number Game</h3>");
if (userGuess === secret) {
  document.write("Congratulations! You guessed the secret number.");
} else {
  document.write("Sorry! The secret number was " + secret);
}

var now = new Date();
document.write("<h3>Q1:</h3>Current Date & Time: " + now + "<br><br>");

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
alert("Current Month: " + months[now.getMonth()]);

var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert("Today is: " + days[now.getDay()]);

if (now.getDay() === 0 || now.getDay() === 6) {
  document.write("<h3>Q4:</h3>It's Fun day!<br><br>");
}

var date = now.getDate();
if (date < 16) {
  document.write("<h3>Q5:</h3>First fifteen days of the month<br><br>");
} else {
  document.write("<h3>Q5:</h3>Last days of the month<br><br>");
}

var pastMinutes = Math.floor(now.getTime() / (1000 * 60));
document.write("<h3>Q6:</h3>Minutes since Jan 1, 1970: " + pastMinutes + "<br><br>");

var hours = now.getHours();
if (hours < 12) {
  alert("Its AM");
} else {
  alert("Its PM");
}

var laterDate = new Date(2020, 11, 31);
document.write("<h3>Q8:</h3>Later Date: " + laterDate + "<br><br>");

var ramadanStart = new Date("June 18, 2015");
var diff = now.getTime() - ramadanStart.getTime();
var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
alert(daysPassed + " days have passed since 1st Ramadan, 2015");

var start2015 = new Date("January 1, 2015");
var secondsPassed = Math.floor((now.getTime() - start2015.getTime()) / 1000);
document.write("<h3>Q10:</h3>Seconds passed since 1st Jan 2015: " + secondsPassed + "<br><br>");

var newTime = new Date();
newTime.setHours(newTime.getHours() + 1);
document.write("<h3>Q11:</h3>Time after 1 hour: " + newTime + "<br><br>");

var pastDate = new Date();
pastDate.setFullYear(pastDate.getFullYear() - 100);
alert("Date 100 years back: " + pastDate);

var age = prompt("Enter your age");
var birthYear = now.getFullYear() - age;
document.write("<h3>Q13:</h3>Your Birth Year is: " + birthYear + "<br><br>");

var customerName = "Naveed Akhtar";
var units = 410;
var chargesPerUnit = 16;
var latePayment = 350;
var netAmount = units * chargesPerUnit;
var grossAmount = netAmount + latePayment;

document.write("<h3>Q14: K-Electric Bill</h3>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + months[now.getMonth()] + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable: " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePayment.toFixed(2) + "<br>");
document.write("Gross Amount Payable: " + grossAmount.toFixed(2) + "<br>");

