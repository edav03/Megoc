/* Menu desplegable */
let menu = document.getElementById('menu')
let contenedorMenu = document.querySelector('.menu')
let menuOn = false

menu.addEventListener('click', (e) => {
  if (menuOn == true) {
    contenedorMenu.style.display = 'none'
    menuOn = false

    menu.style.rotate = '90deg'
    menu.style.opacity = '0.5'
  } else {
    contenedorMenu.style.display = 'flex'
    menuOn = true

    menu.style.rotate = '0deg'
    menu.style.opacity = '1'
  }
})

/** Cookies */
let cookie = document.getElementById('cookies')
let button = document.getElementsByTagName('button')[0]

button.addEventListener('click', (e) => {
  cookie.style.display = 'none'
})

/* Link Whatsapp e email */
let wh = document.getElementById('wh')
let mail = document.getElementById('mail')

wh.addEventListener('click', (e) => {
  navigator.clipboard.writeText('630877725')
})

mail.addEventListener('click', (e) => {
  navigator.clipboard.writeText('modernespaigospelcor@hotmail.com')
})
