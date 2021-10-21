var result = document.querySelector('#list').children
result[0].parentNode.appendChild(result[2].parentNode.replaceChild(result[0], result[4]));
result[0].parentNode.appendChild(result[0]);
result[0].parentNode.appendChild(result[1]);
result[0].parentNode.appendChild(result[0]);
var changedResult = document.querySelector('#list')
var output = changedResult.innerHTML

console.log(output)