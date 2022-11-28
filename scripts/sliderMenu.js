$(function(){

    
    $('#sobreNos').click(function(){
       $('#list-sobre').slideToggle(500);
    });

    $('#carreira').click(function(){
        $('#list-carreira').slideToggle(500);
    });

    $('#impactoSocial').click(function(){
        $('#list-impacto').slideToggle(500);
    });

    $('#rewards').click(function(){
        $('#list-rewards').slideToggle(500);
    });
    
    
    $('.menu-img').click(function(){
        $('aside').animate({width: 'toggle'})
    });


});