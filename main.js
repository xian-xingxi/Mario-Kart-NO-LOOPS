// Mario Kart Item Box Practice Assignment
"use strict";

// Global Variables
let banana1 = 0;
let gShell1 = 0;
let stars1 = 0;
let gMush1 = 0;
let bBill1 = 0;
let final1 = document.getElementById("picture");
let error1 = document.getElementById("error1");

// Event Listener
document.getElementById("btn").addEventListener("click", generate);

// Event Functions
function generate() {

    //Declare and assign input
    let val = document.getElementById("int").value;

    //Generate random numbers
    let rand1 = Math.random();

    // For Invalid Input positions
    if (val != 1 && val != 2 && val != 3 && val != 4 && val != 5 && val != 6 && val != 7 && val != 8 && val != 9 && val != 10 && val != 11 && val != 12) {

        //Invalid input position message
        error1.innerHTML = " Error! Please enter valid racer position!";
        error1.style.color = "red";
        error1.style.fontSize = "15px";

        // For Position 1-6
    } else if (val >= 1 && val <= 6) {

        //Remove Error message if user enter wrong input at first
        error1.innerHTML = " ";

        //45% chance for banana
        if (rand1 <= 0.45) {
            // Processing
            banana1++;
            //Outputs
            document.getElementById("banana").innerHTML = banana1;
            final1.innerHTML += '<img src="images/banana1.png">';

            //35% chance for Green Shell
        } else if (rand1 <= 0.80) {
            //Processing
            gShell1++;
            // Outputs
            document.getElementById('greenshell').innerHTML = gShell1;
            final1.innerHTML += '<img src="images/GreenShell.png">';

            //15% chance for star
        } else if (rand1 <= 0.95) {
            //Processing
            stars1++
            //Outputs
            document.getElementById('star').innerHTML = stars1;
            final1.innerHTML += '<img src="images/Star.png">';

            //4% chance for Golden Mushroom
        } else if (rand1 <= 0.99) {
            //Processing
            gMush1++
            //Ouputs
            document.getElementById('goldenmushroom').innerHTML = gMush1;
            final1.innerHTML += '<img src="images/golden mushroom.png">';

            //1% chance for bullet bill
        } else {
            //Processing
            bBill1++
            //Outputs
            document.getElementById('bulletbill').innerHTML = bBill1;
            final1.innerHTML += '<img src="images/bullet bill1.png">';
        }

        //For position 7-12
    } else {
        //Generate random numbers
        let rand2 = Math.random();

        //Remove error message if necessary
        error1.innerHTML = " ";

        //35% chance for Golden Mushroom
        if (rand2 <= 0.35) {
            // Processing
            gMush1++
            // Output
            document.getElementById('goldenmushroom').innerHTML = gMush1;
            final1.innerHTML += '<img src="images/golden mushroom.png">';

            //30% chance for bullet bill
        } else if (rand2 <= 0.65) {
            //Process
            bBill1++
            //Output
            document.getElementById('bulletbill').innerHTML = bBill1;
            final1.innerHTML += '<img src="images/bullet bill1.png">';

            //25% chance for star
        } else if (rand2 <= 0.90) {
            //Process
            stars1++
            //Output
            document.getElementById('star').innerHTML = stars1;
            final1.innerHTML += '<img src="images/Star.png">';

            //5% chance for Green shell
        } else if (rand2 <= 0.95) {
            // Process
            gShell1++;
            // Ouput
            document.getElementById('greenshell').innerHTML = gShell1;
            final1.innerHTML += '<img src="images/GreenShell.png">';

            //5% chance for banana
        } else {
            //process
            banana1++;
            //Output
            document.getElementById("banana").innerHTML = banana1;
            final1.innerHTML += '<img src="images/banana1.png">';
        }
    }
    //Total Count
    let totalCount = banana1 + gShell1 + stars1 + gMush1 + bBill1;

    //Display total count
    document.getElementById("endResult").innerHTML = totalCount;
}