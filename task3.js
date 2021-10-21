var button = document.getElementById('button');
var text = document.getElementById('text')

button.addEventListener(
    'click', function () {
        var out = document.createElement('li');
        out.textContent = 'I was pressed!';
        text.appendChild(out);
    }
)

button.addEventListener(
    'mouseenter', function () {
        var out = document.createElement('li');
        out.textContent = 'Mouse on me!';
        text.appendChild(out);
    }
)

button.addEventListener(
    'mouseleave', function () {
        var out = document.createElement('li');
        out.textContent = 'Mouse is not on me!';
        text.appendChild(out);
    }
)