const regex_array=
    [/1\s(\d{3})-(\d{3})-(\d{4})/g, 
    /1\s\((\d{3})\)\s(\d{3})-(\d{4})/g,
    /1\((\d{3})\)(\d{3})-(\d{4})/g,
    /1\s(\d{3})\s(\d{3})\s(\d{4})/g,
    /\d{10}/,
    /(\d{3})-(\d{3})-(\d{4})/g,
    /\((\d{3})\)(\d{3})-(\d{4})/g]


const inputNumber = document.getElementById("input-number") 
const resultContainer = document.getElementById("result") 
const checkButton = document.getElementById("check")
console.log(inputNumber.value)

const isValid =(str) => {
     
    for ( let reg of regex_array ){
        if(reg.test(str)){
            return true
        }
    }
 }

 
console.log(isValid(inputNumber.value))


checkButton.addEventListener("click", () => { 
    if (inputNumber.value === ""){
        alert("Please provide a phone number")
    }
    else if (isValid(inputNumber.value)){
    const htmlstring = `<p class="valid-input-title">Valid US number:</p><p class="valid-input">${inputNumber.value}</p>`
    resultContainer.innerHTML += htmlstring;
    inputNumber.value ="";
    }
    else if (!isValid(inputNumber.value)){
        const htmlstring = `<p class="invalid-input-title">Invalid US number:</p><p class="invalid-input">${inputNumber.value}</p>`
        resultContainer.innerHTML += htmlstring;
        inputNumber.value ="";
        }


} ) 

