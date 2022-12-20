$(function(){

    var indiceAtual = 0;
    var indiceMax = $('.slider-container img').length;
    var delay = 5000;

    initSlider()
    clickSlider()
    
    function initSlider(){
        for(var i = 0; i< indiceMax; i++){
            if(i == 0){
                $('.bullets-nav').append('<span style="background: #EEEEEE;"></span>')
            } else{
                $('.bullets-nav').append('<span></span>')
            }
        }
        $('.slider-container img').eq(0).fadeIn();
        setInterval(function(){
            alterSlider();
        },delay)
    }

    function clickSlider(){
        $('.bullets-nav span').click(function(){
            $('.slider-container img').eq(indiceAtual).stop().fadeOut();
            indiceAtual = $(this).index()
            $('.slider-container img').eq(indiceAtual).stop().fadeIn();
            $('.bullets-nav span').css('background','#ccc');
            $(this).css('background','#EEEEEE')

        });
    }

    function alterSlider(){
        $('.slider-container img').eq(indiceAtual).stop().fadeOut();
        indiceAtual+=1;
        if(indiceAtual == indiceMax)
            indiceAtual = 0;
        $('.bullets-nav span').css('background-color','#ccc');
        $('.bullets-nav span').eq(indiceAtual).css('background-color','#EEEEEE')
        $('.slider-container img').eq(indiceAtual).stop().fadeIn();


    }


});