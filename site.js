$(document).ready(function(){
    // $(window).scrollTop(100);
   
    $(window).scroll(function(){
        if($(this).scrollTop() > 20){
            $('.navbar').addClass('add-navbar');
        }else{
            $('.navbar').removeClass('add-navbar');
        }
    })
    $(".btn-toggle-hide").click(function(){
        $(".collapse").slideToggle();
    });
   
});