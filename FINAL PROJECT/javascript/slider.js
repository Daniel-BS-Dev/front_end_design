 // PORTFOLIO SLIDER

 // Dclarando variaveis do slider
 var sliderContainer = document.querySelector('.jl-slider-container');
 var sliderList = document.querySelector('.jl-slider-list');
 var sliderItems = document.querySelectorAll('.jl-slider-item');
 const sliderTotalItems = sliderItems.length;
 var sliderListWidth = null;
 var prevItem = document.querySelector('.jl-item-prev');
 var nextItem = document.querySelector('.jl-item-next');
 var sliderPos = 0;
 var currentSlide = document.querySelector('.jl-current-slide');
 var totalSlide = document.querySelector('.jl-total-slide');
 var currentCounter = 1;

 
 //capturando largura individuais
 var containerWidth = sliderContainer.parentElement.offsetWidth;
 

 // Passando largura dinâmicas
 sliderContainer.style.width= containerWidth+'px';

 for(var p=0; p<sliderItems.length; p++){
     sliderItems[p].style.width = containerWidth+'px';
     var sliderItemWidth = sliderItems[p].offsetWidth;

     sliderListWidth += sliderItemWidth;
 }

 sliderList.style.width = sliderListWidth +'px';


 // Fazendo animação do slider onClick


 //HANDLERS
 var nextSliderAnime = function(){
    var lastItem = sliderListWidth - containerWidth;
    if(-sliderPos === lastItem){
       return;
    }
    sliderPos -= containerWidth;
     anime({
         targets: sliderList,
         translateX: sliderPos
     });
 }

 var prevSliderAnime = function(){
    if(sliderPos === 0){
        return;
     }
     sliderPos += containerWidth;
      anime({
          targets: sliderList,
          translateX: sliderPos
      });

 }

 // Counter Formater

 var counterFormater = function(number){
   if(number < 10){
       return '0'+number;
   }else{
       return number;
   }
 }

 //Counter add
 var counterAdd = function(){
     if((currentCounter >= 0) && (currentCounter < sliderTotalItems)){ 
        currentCounter++;
        currentSlide.innerHTML= counterFormater(currentCounter);
    }
  }

  //Counter remove
 var counterRemove = function(){
    if((currentCounter > 1) && (currentCounter <= sliderTotalItems)){ 
       currentCounter--;
       currentSlide.innerHTML= counterFormater(currentCounter);
   }
 }


 // ACTIONS
 totalSlide.innerHTML=counterFormater(sliderTotalItems);


 nextItem.addEventListener('click', function(){
     nextSliderAnime();
     counterAdd();
 });

 prevItem.addEventListener('click', function(){
     prevSliderAnime();
     counterRemove();
   
});