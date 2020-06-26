const scrollBtn = document.querySelector("body > img")

window.addEventListener("scroll", _ => {
  if (document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300)
    scrollBtn.style.display = "block"
  else
    scrollBtn.style.display = "none"
})

document.addEventListener("DOMContentLoaded", _ => {
  scrollBtn.addEventListener("click", _ => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })
})