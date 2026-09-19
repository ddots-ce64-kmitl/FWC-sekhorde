$(document).ready(function() {
    $('input[type="submit"]').on('click', function() {
        let a = parseInt($('#left').val(), 10);
        let b = parseInt($('#right').val(), 10);
        let op = $('#operator').val();

        if (isNaN(a) || isNaN(b) || a < 0 || b < 0) return alert("Error :(");
        if ((op === "/" || op === "%") && b === 0) return alert("It's over 9000!");

        let res = { '+': a + b, '-': a - b, '*': a * b, '/': a / b, '%': a % b }[op];
        alert(res);
        console.log(res);
    });

    setInterval(() => alert("Please, use me..."), 30000);
});