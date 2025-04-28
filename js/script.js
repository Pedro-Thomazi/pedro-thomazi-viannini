const bodyPage = document.querySelector("body")
const navbar = document.querySelector(".navbar")
const containerDarkMode = document.querySelector(".btnDarkMode")
const labelDM = document.querySelector(".labelDM")
const colorYellow = document.querySelector(".colorYellow")
const colorGray = document.querySelector(".colorGray")
const inputCheck = document.querySelector("#darkMode")
const alertCopyEmail = document.querySelector("#alertCopyEmail")
const footerLink = document.querySelector("#footerLink")
const email = document.querySelector(".email")

let colorMode = "#f00"
let backcolorMode = "rgba(0, 0, 0, 0.16)"

labelDM.addEventListener("click", () => {
  labelDM.classList.toggle("active")
  containerDarkMode.classList.toggle("gray")
  colorYellow.classList.toggle("hide")
  colorGray.classList.toggle("hide")
  bodyPage.classList.toggle("whiteMode")

  if (!inputCheck.checked) {
    colorMode = "#0f0"
    backcolorMode = "rgba(255, 255, 255, 0.16)"
  }
  else {
    colorMode = "#f00"
    backcolorMode = "rgba(0, 0, 0, 0.16)"
  }
})


// Função click email
email.addEventListener("click", () => {
  const myEmail = 'pedro.thomazi@hotmail.com'
  navigator.clipboard.writeText(myEmail)
  footerLink.style.transform = "translateY(0%)"
  alertCopyEmail.classList.add("open")
  
  setTimeout(() => {
    alertCopyEmail.classList.remove("open")
    footerLink.style.transform = "translateY(-80%)"
  }, 5000)
})



// Ações no Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight) {
    navbar.classList.add("column")
  } else {
    navbar.classList.remove("column")
  }
})

// Canvas
let c = document.getElementById("c")
let ctx = c.getContext("2d")

c.height = window.innerHeight
c.width = window.innerWidth
let letters = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%&*"
letters = letters.split("")
let fontSize = 20
let columns = c.width / fontSize
let drops = []
for (let x = 0; x < columns; x++) {
  drops[x] = 50
}

function draw() {
  ctx.fillStyle = backcolorMode
  ctx.fillRect(0, 0, c.width, c.height)
  ctx.fillStyle = colorMode
  ctx.font = fontSize + "px arial"

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)]

    ctx.fillText(text, i * fontSize, drops[i] * fontSize)
    if (drops[i] * fontSize > c.height && Math.random() > 0.975) {
      drops[i] = 0
    }
    drops[i]++
  }
}

setInterval(draw, 50)