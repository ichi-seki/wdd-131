const logoImage = document.querySelector('#logo');
const themeSelector = document.querySelector('#theme_selector')
console.log(themeSelector.value);

function themeChange(){
    if (themeSelector.value === 'dark'){
        document.body.classList.add('dark');
        logoImage.src = 'byui-logo_white.png';
    } else {
        document.body.classList.remove('dark');
        logoImage.src = 'byui-logo_blue.webp'
    }
}

themeSelector.addEventListener('change', themeChange)
themeChange();