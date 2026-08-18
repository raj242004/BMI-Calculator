const bmiForm = document.getElementById("bmiForm");

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const error = document.getElementById("error");
const result = document.getElementById("result");

const bmiValue = document.getElementById("bmiValue");
const category = document.getElementById("category");


bmiForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    // Clear previous messages
    error.textContent = "";
    result.style.display = "none";


    // Validate empty fields
    if (heightInput.value === "" || weightInput.value === "") {
        error.textContent = "Please enter both height and weight.";
        return;
    }


    // Validate invalid numbers
    if (!Number.isFinite(height) || !Number.isFinite(weight)) {
        error.textContent = "Please enter valid numbers.";
        return;
    }


    // Validate zero and negative numbers
    if (height <= 0 || weight <= 0) {
        error.textContent = "Height and weight must be greater than zero.";
        return;
    }


    // Convert height from cm to meters
    const heightInMeters = height / 100;


    // BMI formula
    const bmi = weight / (heightInMeters * heightInMeters);


    // Determine BMI category
    let bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } 
    else if (bmi < 25) {
        bmiCategory = "Normal weight";
    } 
    else if (bmi < 30) {
        bmiCategory = "Overweight";
    } 
    else {
        bmiCategory = "Obese";
    }


    // Display result
    bmiValue.textContent = bmi.toFixed(2);
    category.textContent = bmiCategory;

    result.style.display = "block";
});