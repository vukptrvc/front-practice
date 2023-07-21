$(document).ready(function() {
    var $slider = $('#slider'),
        $slides = $slider.children('.slide'),
        $sliderNav = $('.slider-nav'),
        prev = $slides.length,
        next = 2,
        slides = [],
        animate,
        timer;
    
    //Append navigation
    $slider.append('<div class=slider-mov-prev><i class="fas fa-chevron-left"></i></div><div class=slider-mov-next><i class="fas fa-chevron-right"></i></div><div id=sliderNav class=slider-nav></div>');

    //get slides
    for(var j = 0; j < $slides.length; j++) {
        var id = j+1;
        
        if(id === 1) {
            $slides.eq(j).attr('data-id', id).attr('id', 'active');
            $('#sliderNav').append('<i class="fas fa-circle" data-id="'+id+'"></i>');
        }else{
            $slides.eq(j).attr('data-id', id);
            $('#sliderNav').append('<i class="far fa-circle" data-id="'+id+'"></i>');
        }
    }
    //slide function
    function slideIt(prev, next, timer, loop, reverse, nav) {
        animate = setTimeout(function() {
            var $active = $slider.children('#active'),
                activeID = $active.attr('data-id');
            
            $slides.removeClass('slide-off').removeClass('slide-off-reverse');
            
            $active.removeClass('slide-active').removeClass('slide-active-reverse');
            setTimeout(function(){
                $('#slider .fa-circle').removeClass('fas').addClass('far');
            }, 1000);
            if(+nav<=$slides.length && +nav>0){
                activeID = nav-1;
                if(activeID === 0){
                    activeID = $slides.length;
                }
                if(activeID === -1){
                    activeID = $slides.length - 1;
                }
            }
            
            if(!reverse){
                $active.addClass('slide-off');
                prev = +activeID;
                activeID = +activeID + 1;
                next = +activeID + 1;
                if(activeID > $slides.length){
                    prev = $slides.length;
                    activeID = 1;
                    next = 2;
                }
            }else{
                $active.addClass('slide-off-reverse');
                next = +activeID;
                activeID = +prev;
                prev = prev-1;
                if(prev === 0){prev = 3;}
            }
            
            $active.attr('id', '');
            setTimeout(function() {
                if(!reverse){
                    $slider.children('.slide[data-id="'+activeID+'"]').attr('id', 'active').addClass('slide-active');
                }else{
                    $slider.children('.slide[data-id="'+activeID+'"]').attr('id', 'active').addClass('slide-active-reverse');
                }
            }, 1000);
            setTimeout(function(){
                $('#slider .fa-circle[data-id="'+activeID+'"]').addClass('fas').removeClass('far');
            }, 2000);
                
            if(loop !== 'once'){
                slideIt(prev, next, 5000);
            }
        }, timer);
    }
    
    slideIt(prev, next, 5000);
    //start-stop slider on mouseover
    $('#slider').on('mouseover', function() {
        clearTimeout(animate);
    }).on('mouseout', function() {
        slideIt(prev, next, 1000);
    });

    //move on navigation click
    $('.slider-mov-next, .slider-mov-prev').on('click', function() {
        if($(this).hasClass('slider-mov-next')){
            slideIt(prev, next, 100, 'once');
        }else if($(this).hasClass('slider-mov-prev')) {
            var acID = $slider.children('#active').attr('data-id');
            if(+acID-1===0){prev = $slides.length; next = +acID+1}else{prev = +acID-1;}
            if(acID === $slides.length){next=1;}
            slideIt(prev, next, 100, 'once', true);
        }
    });
    $('#slider .fa-circle').on('click', function() {
        var id = $(this).attr('data-id');
        if($slider.children('#active').attr('data-id')!==id){
            slideIt(prev, next, 100, 'once', false, id);
        }
    });
});

