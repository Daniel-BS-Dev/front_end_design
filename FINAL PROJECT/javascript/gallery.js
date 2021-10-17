var overlay = document.querySelector('.jl-overlay');
var frameContainer = document.querySelector('.jl-gallery-frame-container');
var frameImage = document.querySelector('.jl-gallery-frame-image');
var galleryImages = document.querySelectorAll('.jl-thumb-img');

const getImageSrc = function(){
    for(var i=0; i<galleryImages.length; i++){
      galleryImages[i].addEventListener('click', function(){
        var imageSrc = this.getAttribute('data-src');
        frameImage.setAttribute('src',imageSrc);
        frameImage.style.height=527+'px';

        overlay.classList.toggle('jl-is-open');
        frameContainer.classList.toggle('jl-is-open');
      });
    }
}

getImageSrc();