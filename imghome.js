var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};

function resizeThumb(parentID, size, size2) {
    var parent = document.getElementById(parentID),
        image = parent.getElementsByTagName('img');
    for (var i = 0; i < image.length; i++) {
        image[i].src = image[i].src.replace(/\/s72\-c/, "/s" + size + "");
        image[i].width = size;
        image[i].height = size2;
    }
}
resizeThumb('Blog1', 326, 180);
