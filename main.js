const timeBox = document.querySelector(".timer-box")
var music = new Audio('music.mp3')
date.addEventListener("change", () => {
  const timer = setInterval(() => {
    const now = new Date().getTime()
    const future = new Date(date.value).getTime()
    const difference = future - now
    var day = Math.floor(difference/ (1000 * 60 * 60 * 24));
    var hour = Math.floor((difference% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((difference% (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((difference% (1000 * 60)) / 1000);
    if(difference <= 0){
  timeBox.innerHTML = `00 : 00 : 00 : 00`
  clearInterval(timer)
music.play()  
}
  else{
music.pause()
    timeBox.innerHTML = `${day.toString().padStart(2, "0")} : ${hour.toString().padStart(2, "0")} : ${minute.toString().padStart(2, "0")} : ${second.toString().padStart(2, "0")}`}
  }, 100)
})
const btn = document.querySelector("#btn")
btn.addEventListener('click', () => {
  var theme = ''
  document.body.classList.toggle('body-style')
  if(document.body.classList.contains('body-style')){
    theme = 'colored'
  }
  else{
    theme = ''
  }
localStorage.setItem('color', theme)
})
const style = localStorage.getItem('color')
if(style === 'colored'){
  document.body.classList.add('body-style')
}
