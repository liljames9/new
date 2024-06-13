function removeBox(takeAway) {
    takeAway.remove();
}
removeBox();

function changeImage(x, image) {
    if (x == 1) {
        image.src = 'succulents-1.jpg';
    }
    if (x == 2) {
        image.src = 'succulents-2.jpg'
    }
}