let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numberset = document.getElementById("numbers");
let symbolset = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*?+-()/";

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePassword = (password = "") => {
    if (uppercase.checked)
        password += getRandomData(upper);

    if (lowercase.checked)
        password += getRandomData(lower);

    if (numberset.checked)
        password += getRandomData(number);

    if (symbolset.checked)
        password += getRandomData(symbol);

    if (password.length < inputSlider.value)
        return generatePassword(password);

    passBox.value = password.substring(0, inputSlider.value);
}

genbtn.addEventListener('click', function () {
    generatePassword();
})

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
})
