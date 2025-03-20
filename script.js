function sendText(name, time) {
    console.log(`Hey ` + name + `, do you want to hang out later today at ` + time + `?`)
}
sendText(`Grace`, 11)
sendText(`Jada`, 10)
sendText(`Michael`, 9)
sendText(`William`, 6)
sendText(`Sean`, 5)

function sendReminder(name, time) {
    console.log(`Dear ` + name + `, your meeting is at ` + time + `.`)
}

sendReminder('Sanjay', 7)
sendReminder('Tiffany', 5)
sendReminder('Oscar', 3)
sendReminder('Anabelle', 2)

let name = `Terrence`
let count = 1

function showAlert() {
    console.log(name + `, wake up! This is your alarm number ` + count + `!`)
    count += 1
}

showAlert()
showAlert()
showAlert()
showAlert()

function calculate() {
    console.log(`hello`);
    console.log(2 + 2)
}

calculate();
calculate();

function calculateTax(cost, taxPercent = 0.1) {
    console.log(cost * taxPercent);
}

calculateTax(2000, 0.3);
calculateTax(5000);

function changeGreeting() {
    document.getElementById("greeting").textContent = `Hello, JavaScript!`;
}

function changeBackground() {
    document.body.style.backgroundColor = `lightblue`;
}

function showName() {
    let name = document.getElementById("userInput").value;
    document.getElementById("output").textContent = `Hello, ${name}!`
}

let count1 = 0

function increaseCount() {
    count1++;
    document.getElementById("count1").textContent = `${count1}`;
}

function changeImage() {
    document.getElementById("myImage").src = `free-photo-of-mountain-and-evergreen-forest-in-winter.jpeg`;
}

function toggleText() {
    let text = document.getElementById("text");
    text.style.display = text.style.display === "none"? "block": "none";
}

function increaseFontSize() {
    document.getElementById("textSize").style.fontSize = `24px`;
}

function updateContent() {
    document.getElementById("title").textContent = `New Title`;
    document.getElementById("description").textContent = `This text has been changed!`;
    document.getElementById("description").style.color = `red`;
}

function calculateSquare() {
    let num = document.getElementById("numberInput").value;
    let square = num * num;
    document.getElementById("result").textContent = `The square of ${num} is ${square}`;
}