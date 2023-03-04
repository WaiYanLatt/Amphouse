let asidebtn = document.querySelector('.aside-btn');
let aside = document.querySelector('.aside');
let backdrop = document.querySelector('.__backdrop');

asidebtn.addEventListener('click', () =>{
    aside.classList.add('show');
    backdrop.classList.add('offcanvas-backdrop');
    backdrop.classList.add('show');
});

backdrop.addEventListener('click', () =>{
    aside.classList.remove('show');
    backdrop.classList.remove('offcanvas-backdrop');
    backdrop.classList.remove('show');
});


// Theme

let card = document.querySelectorAll('.card');

const changeThemeToDark = () => {
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('data-theme','dark');
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute('data-theme','light');
    localStorage.setItem('data-theme','light')
}



let changeTheme = document.getElementById('changeTheme');

changeTheme.addEventListener('change',  () => {
    let theme = localStorage.getItem('data-theme');
    if (theme === 'dark') {
        changeThemeToLight();
    } else {
        changeThemeToDark()
    }
})

let theme = localStorage.getItem('data-theme');
if (theme === 'dark') {
    changeThemeToDark()
    changeTheme.setAttribute('checked','checked')
} else {
    changeThemeToLight()
}
