var backColor = document.querySelector('h1');
backColor.setAttribute('style', 'background-color: #77D970');
var bold = document.querySelector("#myDiv").children;
bold[0].setAttribute('style', 'font-weight: bold');
bold[1].setAttribute('style', 'color: red');
bold[2].setAttribute('style', 'text-decoration: underline');
bold[3].setAttribute('style', 'font: italic 1em "Fira Sans", serif;');
var line = document.querySelector("#myList");
line.setAttribute('style', 'display: flex; float: left; width: auto; list-style: outside none none; flex-direction: row');
var invisible = document.querySelector('span');
invisible.setAttribute('style', 'visibility: hidden;')
    ;