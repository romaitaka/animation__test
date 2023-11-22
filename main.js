document.getElementById('qr-code').addEventListener('click', function () {
    var logoFeature = document.getElementById('logo-feature');
    var currentSrc = logoFeature.src;
    var initialImage = 'img/feature-logo.jpg'; // Путь к начальному изображению
    var alternativeImage = 'img/QR.png'; // Путь к альтернативному изображению

    if (currentSrc.includes(initialImage)) {
        logoFeature.src = alternativeImage;
        logoFeature.style.borderRadius = '20px';
    } else {
        logoFeature.src = initialImage;
        logoFeature.style.borderRadius = '100px';
    }
});

// Modal window

var modal = document.getElementById("myModal");
var btn = document.getElementById("card__bonus");
var span = document.getElementsByClassName("close")[0];
var modalText = document.getElementById("modal-text");

btn.onclick = function () {
    modal.style.display = "block";
    modalText.textContent = btn.textContent;
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
