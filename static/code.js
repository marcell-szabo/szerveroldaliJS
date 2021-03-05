const h1s = document.getElementsByTagName("h1")
for(var i = 0; i < h1s.length; i++) {
    h1s[i].innerHTML = h1s[i].innerHTML.replace(' ', '<br />')
}