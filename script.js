const button = document.getElementById("themeToggle");

button.onclick = () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        button.textContent = "☀";
    } else {
        button.textContent = "☾";
    }
};
