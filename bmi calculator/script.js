const bmiForm = document.getElementById("bmiForm");

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const error = document.getElementById("error");
const result = document.getElementById("result");

const bmiValue = document.getElementById("bmiValue");
const category = document.getElementById("category");


bmiForm.addEventListener("submit", function(event) {

    
    event.preventDefault();

   
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    
    error.textContent = "";
    result.style.display = "none";


    
    if (heightInput.value === "" || weightInput.value === "") {
        error.textContent = "Please enter both height and weight.";
        return;
    }


    
    if (!Number.isFinite(height) || !Number.isFinite(weight)) {
        error.textContent = "Please enter valid numbers.";
        return;
    }


    
    if (height <= 0 || weight <= 0) {
        error.textContent = "Height and weight must be greater than zero.";
        return;
    }


    
    const heightInMeters = height / 100;


    
    const bmi = weight / (heightInMeters * heightInMeters);


   
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


    
    bmiValue.textContent = bmi.toFixed(2);
    category.textContent = bmiCategory;

    result.style.display = "block";
});