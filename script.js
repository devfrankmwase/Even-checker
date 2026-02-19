const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");
const themeToggle = document.getElementById("themeToggle")

function applyTheme(theme) {
    if(theme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.checked = true;
    } else {
        document.body.classList.remove("light-mode");
        themeToggle.checked = false;
    }


}
// Load saved theme
 const savedTheme = localStorage.getItem("theme") || "dark";
 applyTheme(savedTheme);

 themeToggle.addEventListener("change", () => {
    const newTheme = themeToggle.checked ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme",newTheme);
 })

 // Even/ Odd Logic
checkBtn.addEventListener("click", () => {
    const num = Number(numberInput.value);

    if(numberInput.value.trim() === "" || isNaN(num)) {
        result.textContent = "Please enter a number valid number";
        result.style.color = "red";
        return;
    }

    if(num === 0) {
        result.textContent = "Zero is neither Odd nor Even in this checker";
        result.style.color = "orange";
        return;
    }

    if (num % 2 === 0) {
        result.textContent = `${num} is Even`;
        result.style.color = "lightgreen";
    } else {
        result.textContent = `${num} is Odd`;
        result.style.color = "skyblue";
    }
    }); 

 
