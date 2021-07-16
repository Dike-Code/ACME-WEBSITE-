const mobile_menu = document.querySelector('#mobile_menu')
const nav_bar = document.querySelector('.nav_bar')

mobile_menu.addEventListener('click', function(){
    mobile_menu.classList.toggle('is-active')
    nav_bar.classList.toggle('active')
})