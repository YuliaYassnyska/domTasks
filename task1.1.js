var result = document.getElementById('list').children
result[0].parentNode.insertBefore(result[4], result[1]);
result[0].parentNode.insertBefore(result[4], result[3]);
var changedResult = document.getElementById('list')
var output = changedResult.innerHTML

console.log(output)