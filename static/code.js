const h1s = document.getElementsByName("breaktext")
for(var i = 0; i < h1s.length; i++) {
    h1s[i].innerHTML = h1s[i].innerHTML.replace(' ', '<br />')
}