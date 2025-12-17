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
