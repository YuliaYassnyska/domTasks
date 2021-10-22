let result = document.getElementById('list').children
// result[0].parentNode.appendChild(result[2].parentNode.replaceChild(result[0], result[4]));
// result[0].parentNode.appendChild(result[0]);
// result[0].parentNode.appendChild(result[1]);
// result[0].parentNode.appendChild(result[0]);
// var changedResult = document.querySelector('#list')
// var output = changedResult.innerHTML

let output = [
    result[0].innerHTML,
    result[4].innerHTML,
    result[1].innerHTML,
    result[3].innerHTML,
    result[2].innerHTML
]

console.log(output)