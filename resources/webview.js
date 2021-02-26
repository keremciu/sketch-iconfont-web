// disable the context menu (eg. the right click menu) to have a more native feel
document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})

var toAppend = "";
for (i = 0; i < window.icons.length; ++i) {
   toAppend += "<button class='material-icons'>" + window.icons[i] + "</button>";
}
document.getElementById('icons').innerHTML = toAppend

document.getElementById("icons").addEventListener("click", (event) => {
  if (event.target.tagName != 'BUTTON') return;
  const iconName = event.target.innerHTML
  window.postMessage('insertText', iconName)
});