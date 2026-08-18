    BMI Calculator
    
    A simple, responsive, and beginner-friendly BMI (Body Mass Index) Calculator built using HTML5, CSS3, and JavaScript.
    
    This project was created as part of Task 3 – BMI Calculator to practice HTML forms, JavaScript input handling, basic mathematical calculations, conditional statements, validation, and dynamic DOM manipulation.
    
    📌 Project Overview
    
    The BMI Calculator allows a user to enter their:
    
    Height in centimeters (cm)
    
    Weight in kilograms (kg)
    
    After clicking the Calculate BMI button, the application calculates the user's BMI and displays both the numerical BMI value and its corresponding category.
    
    The calculator also validates user input before performing the calculation. It prevents invalid values such as empty fields, zero, negative numbers, and non-numeric input from reaching the BMI formula.
    
    🎯 Task Objective
    
    The main objective of this project is to practice:
    
    HTML form creation
    
    Form input handling
    
    JavaScript event handling
    
    Basic mathematical calculations
    
    Conditional statements using if, else if, and else
    
    Input validation
    
    DOM manipulation
    
    Displaying dynamic results
    
    Basic responsive UI design
    
    ✨ Features
    
    1. Height Input
    
    The user can enter their height in centimeters (cm).
    
    Example:
    
    Height: 175 cm
    
    2. Weight Input
    
    The user can enter their weight in kilograms (kg).
    
    Example:
    
    Weight: 70 kg
    
    3. BMI Calculation
    
    The application calculates BMI using the standard formula:
    
    BMI = Weight (kg) / Height² (m)
    
    Because the user enters height in centimeters, the application first converts centimeters into meters:
    
    Height in meters = Height in centimeters / 100
    
    For example:
    
    175 cm / 100 = 1.75 m
    
    The BMI is then calculated:
    
    BMI = 70 / (1.75 × 1.75)
    BMI = 22.86
    
    4. BMI Category
    
    The application assigns a category based on the calculated BMI:
    
    BMI Range
    
    Category
    
    Less than 18.5
    
    Underweight
    
    18.5 – 24.9
    
    Normal weight
    
    25 – 29.9
    
    Overweight
    
    30 or above
    
    Obese
    
    5. Input Validation
    
    The application checks the input before calculating BMI.
    
    It handles:
    
    Empty height
    
    Empty weight
    
    Invalid values
    
    Non-numeric values
    
    Zero values
    
    Negative values
    
    Example error:
    
    Please enter both height and weight.
    
    Another example:
    
    Height and weight must be greater than zero.
    
    6. Dynamic Result Display
    
    The BMI result section is initially hidden.
    
    After a successful calculation, JavaScript dynamically displays:
    
    Your BMI
    
    22.86
    
    Normal weight
    
    🛠️ Technologies Used
    
    HTML5
    
    HTML5 is used to create the structure of the application.
    
    It provides:
    
    Page structure
    
    Heading
    
    Input fields
    
    Labels
    
    Form
    
    Calculate button
    
    Result section
    
    Important HTML elements used include:
    
    <form>
    <input>
    <label>
    <button>
    <div>
    <p>
    <h1>
    <h2>
    
    CSS3
    
    CSS3 is used to design and style the calculator.
    
    It provides:
    
    Centered calculator layout
    
    Background styling
    
    Input styling
    
    Button styling
    
    Rounded corners
    
    Shadows
    
    Spacing
    
    Typography
    
    Result section styling
    
    JavaScript
    
    JavaScript provides the functionality of the calculator.
    
    It is responsible for:
    
    Reading input values
    
    Handling form submission
    
    Validating input
    
    Converting units
    
    Calculating BMI
    
    Determining BMI category
    
    Updating the webpage
    
    Displaying error messages
    
    Showing the calculation result
