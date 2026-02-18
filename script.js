const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");
const themeToggle = document.getElementById("themeToggle")

checkBtn.addEventListener("click", () => {
    const num = parseInt(numberInput.value);

    if (isNaN(num)) {
        result.textContent = "Please enter a valid number";
        result.style.color = "orange";
        return;
    }

    if (num % 2 === 0) {
        result.textContent = `${num} is Even `;
        result.style.color = "lightgreen";
    } else {
        result.textContent = `${num} is Odd`;
        result.style.color = "skyblue";
    }
}); 

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");
    themeToggle.textContent = isLight ? "☀️": "🌙";
})