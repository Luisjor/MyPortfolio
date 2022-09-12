const ToggleButton = document.querySelectorAll(".themeSelector")[0]
const HTMLTheme = document.getElementsByClassName("theme-white").className

ToggleButton.addEventListener("click", () => {
    console.log("clicked")
    toggleTheme()
})

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}