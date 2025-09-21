const bodyElement = document.body;
const logoImage = document.querySelector('#logo');
const themeSelector = document.querySelector('#theme_selector');
const selectedTheme = themeSelector.value;
console.log(selectedTheme);

function changeTheme() {
    if (themeSelector.value === 'dark') {
        bodyElement.classList.add('dark');
        logoImage.src = 'byui-logo_white.png';
    } else {
        bodyElement.classList.remove('dark');
        logoImage.src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);
changeTheme();