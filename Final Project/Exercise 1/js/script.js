// Smooth Scrolling
$('.page-scroll').on('click', function(e){
    var tujuan = $(this).attr('href');
    var elementujuan = $(tujuan);
    $('html,body').animate({
        scrollTop: elementujuan.offset().top-100
    },1000,'easeInOutExpo');

    e.preventDefault();
});

// animasi navbar dan progress
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 700) { 
            
            $('.navbar').addClass('solid');
            $(".bar1").animate({
                width: "40%"
            }, 2500);
            
            $(".bar2").animate({
                width: "45%"
            }, 2500);
            
            $(".bar3").animate({
                width: "10%"
            }, 2500);

            $(".bar4").animate({
                width: "30%"
            }, 2500);

            $(".bar5").animate({
                width: "15%"
            }, 2500);

            $(".bar6").animate({
                width: "40%"
            }, 2500);
        } else {
            $('.navbar').removeClass('solid');
        }
    });
});

// animasi hobi
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() >1700) { 
            
            $('.hobi .pop').each(function(i){
                setTimeout(function(){
                    $('.hobi .pop').eq(i).addClass('muncul');
                },500 * i);
            }); 
            
            
        }
    });
});

//animasi pendidikan
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() >2300) { 
            
            $('.pendidikan .popAtas, .popBawah').each(function(i){
                setTimeout(function(){
                    $('.pendidikan .popAtas').eq(i).addClass('muncul');
                    $('.pendidikan .popBawah').eq(i).addClass('muncul');
                },800 * i);
            }); 
            
            
        }
    });
});


