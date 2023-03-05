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
