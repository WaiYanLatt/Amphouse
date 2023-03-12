let asidebtn = document.querySelector('.aside-btn');
let aside = document.querySelector('.aside');
let backdrop = document.querySelector('.__backdrop');
let main = document.querySelector('.main')
let conta = document.querySelector('#conta')
let aside12 = document.querySelector('.aside12')

asidebtn.addEventListener('click', () =>{
    aside.classList.add('show');
    aside.classList.add('animate__fadeInLeft')
    backdrop.classList.add('offcanvas-backdrop');
    backdrop.classList.add('show');
});

backdrop.addEventListener('click', () =>{
    aside.classList.remove('show');
    backdrop.classList.remove('offcanvas-backdrop');
    backdrop.classList.remove('show');
});

let btnOpen = document.querySelector('#btnbtn');
let btnClose = document.querySelector('#btnClose')


btnOpen.addEventListener('click',() => {
    aside.classList.add('show');
    //   aside.classList.add('animate__fadeInLeft')
      main.classList.add('show')
      aside.classList.remove('close');
      main.classList.remove('close')
      btnOpen.style.display = 'none'
      btnClose.style.display = 'block'
      setTimeout(() => {
       aside12.style.opacity = '0'
      },100)
})


btnClose.addEventListener('click',() => {
    aside.classList.remove('show');
     // aside.classList.remove('animate__fadeInLeft')
      main.classList.remove('show')
      aside.classList.add('close');
      main.classList.add('close')
      btnOpen.style.display = 'block'
      btnClose.style.display = 'none'
      setTimeout(() => {
        aside12.style.opacity = '1'
       },100)
})

conta.addEventListener('click',() => {
    aside.classList.remove('show');
    // aside.classList.remove('animate__fadeInLeft')
     main.classList.remove('show')
     aside.classList.add('close');
     main.classList.add('close')
     btnOpen.style.display = 'block'
     btnClose.style.display = 'none'
     setTimeout(() => {
        aside12.style.opacity = '1'
       },100)
})






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
