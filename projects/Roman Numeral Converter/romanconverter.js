const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = (num) => {
  const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
};

let result = "";

for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
    }
}

return result;
}

const checkUserInput = () => {
    const inputValue = parseInt(numberInput.value);

    if (isNaN(inputValue)) {
        output.textContent = "Please enter a valid number";
        output.classList.add("hidden");
    } else if (inputValue < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        output.classList.add("hidden");
    } else if (inputValue >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        output.classList.add("hidden");
    } else {
        const romanNumeral = convertToRoman(inputValue);
        output.textContent = romanNumeral;
        output.classList.remove("hidden");
    }
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});
