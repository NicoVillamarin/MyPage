function efecto() {

    var ImgEfec = document.getElementById("img-BloqueDos");
    if (ImgEfec.style.filter == 'brightness(30%)') {
        ImgEfec.style.filter = 'brightness(100%)'; 
        ImgEfec.style.borderRadius = '100%';
        ImgEfec.style.transition = 'all 1s';
    } else {
        ImgEfec.style.filter = 'brightness(30%)';
        ImgEfec.style.borderRadius = '20%';
    }

    var HoverEfec = document.getElementById("descript");
    if (HoverEfec.style.display == 'none') {

        HoverEfec.style.display = 'block';
        HoverEfec.style.filter = 'brightness(100%)';
        HoverEfec.style.padding = ' 10px';

    } else {
        HoverEfec.style.display = 'none';
    }

}