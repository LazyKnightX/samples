var num_dist = 0;
var num_real = 0;
var num_last_dist = 0;
var animating = false;
var t1;

function go_num(v) {
    if (animating == true) {
        return;
    }

    if (t1 != null) {
        clearInterval(t1);
        num_real = num_dist;
    }

    num_dist = v;
    var gap = num_dist - num_real;
    var r = 0;

    animating = true;
    t1 = setInterval(() => {
        r += 0.03;
        var n = gap * Math.sin(Math.PI / 2 * r);
        var render = Math.round(num_real + n);
        // if ((num0 + n) == num) {
        if (r >= 1) {
            clearInterval(t1);
            t1 = null;
            num_real = num_dist;
            render = num_dist;
            animating = false;
        }
        let outerHTML = `<p id="info" style="margin-left: ${render}px">dist: ${render}</p>`
        $('#info').prop('outerHTML', outerHTML);
    }, 20);

    $('#now').html(`now: ${num_dist}`);
}

// addEventListener("mousedown", (event) => {
//     // go_num(Math.round(Math.random() * 1000000));
//     go_num(100);
// });

addEventListener("keydown", (event) => {
    if (event.keyCode === 13) { // Enter
        if (num_dist == 100) {
            go_num(0);
        } else {
            go_num(100);
        }
    }
});
