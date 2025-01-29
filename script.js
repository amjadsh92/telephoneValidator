const regex_array = [
    /^1\s\d{3}-\d{3}-\d{4}$/,
    /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1\s\d{3}\s\d{3}\s\d{4}$/,
    /^\d{10}$/,
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
];

const inputNumber = document.getElementById("user-input");
const resultContainer = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");

const isValid = (str) => {
    for (let reg of regex_array) {
        if (reg.test(str)) {
            return true;
        }
    }
    return false; // Explicitly return false if no match is found
};

const outputResult = () => {
    debugger;
    console.log(inputNumber.value);
    const valid = isValid(inputNumber.value); // Store the result once

    if (inputNumber.value === "") {
        alert("Please provide a phone number");
        return;
    }

    if (valid) {
        resultContainer.innerText += `Valid US number: ${inputNumber.value}\n`;
    } else {
        resultContainer.innerText += `Invalid US number: ${inputNumber.value}\n`;
    }

    inputNumber.value = ""; // Clear input field
};

checkButton.addEventListener("click", outputResult);
inputNumber.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        outputResult();
    }
});
clearButton.addEventListener("click", () => {
    resultContainer.innerText = "";
    localStorage.clear();
});
