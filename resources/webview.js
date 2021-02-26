// disable the context menu (eg. the right click menu) to have a more native feel
document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})

const element = document.querySelector(".material-icons");

element.addEventListener("click", (event) => {
  const iconName = event.target.innerHTML
  document.getElementById('answer').innerHTML = iconName
  window.postMessage('insertText', iconName)
});