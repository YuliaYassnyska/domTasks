let list = document.querySelector('#list')
// result[0].parentNode.insertBefore(result[4], result[1]);
// result[0].parentNode.insertBefore(result[4], result[3]);
// var changedResult = document.getElementById('list')
// var output = changedResult.innerHTML
let li = document.querySelector('#list li')

console.log(
    list.firstElementChild.innerHTML,
    list.lastElementChild.innerHTML,
    li.nextElementSibling.innerHTML,
    li.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML,
    li.nextElementSibling.nextElementSibling.innerHTML,

)