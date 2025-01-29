const regex_array = [
  /^1\s(\d{3})-(\d{3})-(\d{4})$/,
  /^1\s\((\d{3})\)\s(\d{3})-(\d{4})$/,
  /^1\((\d{3})\)(\d{3})-(\d{4})$/,
  /^1\s(\d{3})\s(\d{3})\s(\d{4})$/,
  /^\d{10}$/,
  /^(\d{3})-(\d{3})-(\d{4})$/,
  /^\((\d{3})\)(\d{3})-(\d{4})$/,
];

const inputNumber = document.getElementById("input-number");
const resultContainer = document.getElementById("result");
const checkButton = document.getElementById("check");
const clearButton = document.getElementById("clear");
resultContainer.innerHTML = localStorage.getItem("result-container");

const isValid = (str) => {
  for (let reg of regex_array) {
    if (reg.test(str)) {
      return true;
    }
  }
};

const outputResult = () => {
  let valid = isValid(inputNumber.value)
  if (inputNumber.value === "") {
    alert("Please provide a phone number");
  } else if (valid) {
    const htmlstring = `<p class="valid-input-title">Valid US number:</p><p class="valid-input">${inputNumber.value}</p>`;
    resultContainer.innerHTML += htmlstring;
    localStorage.setItem("result-container", resultContainer.innerHTML);
    inputNumber.value = "";
  } else if (!valid) {
    const htmlstring = `<p class="invalid-input-title">Invalid US number:</p><p class="invalid-input">${inputNumber.value}</p>`;
    resultContainer.innerHTML += htmlstring;
    localStorage.setItem("result-container", resultContainer.innerHTML);
    inputNumber.value = "";
  }
};

checkButton.addEventListener("click", outputResult);
inputNumber.addEventListener("keydown", (event) => {
  
  if (event.key === "Enter") {
    outputResult();
  }
});
clearButton.addEventListener("click", () => {
  resultContainer.innerHTML = "";
  localStorage.clear();
});
