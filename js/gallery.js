function upDate(previewPic) {
    console.log("Mouse over / Focus:", previewPic.src);

    var caption = document.getElementById("caption");
    var image = document.getElementById("image");

    caption.innerHTML = previewPic.alt;
    caption.style.color = "white"; // khi hover/focus thì chữ trắng
    image.style.backgroundImage = "url(" + previewPic.src + ")";
}

function undo() {
    console.log("Mouse out / Blur");

    var caption = document.getElementById("caption");
    var image = document.getElementById("image");

    caption.innerHTML = "Hover over an image below to display here.";
    caption.style.color = "black"; // trở lại màu đen
    image.style.backgroundImage = "url('')";
}

function initGallery() {
    console.log("Page loaded – adding tabindex");
    var thumbnails = document.querySelectorAll(".thumbnails img");
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].setAttribute("tabindex", "0");
    }
}
