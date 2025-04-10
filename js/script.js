const containerDarkMode = document.querySelector(".btnDarkMode")
const labelDM = document.querySelector(".labelDM")
const colorYellow = document.querySelector(".colorYellow")
const colorGray = document.querySelector(".colorGray")

labelDM.addEventListener("click", () => {
  labelDM.classList.toggle("active")
  containerDarkMode.classList.toggle("gray")
  colorYellow.classList.toggle("hide")
  colorGray.classList.toggle("hide")
})