let c = 1;

function next() {
    c += 1;
    $('#info').html(`page: ${c}`);
}

function prev() {
    c -= 1;
    $('#info').html(`page: ${c}`);
}

addEventListener("wheel", (event) => {
    console.log(event);
    if (event.deltaY > 0) {
        next()
    }
    else {
        prev()
    }
});
