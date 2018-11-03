/**
 * Created by moroz on 06.09.2017.
 */

$(document).ready(function () {





    //console.log($(window).width());
    if ($(window).width() > 699) {
    $('.data__title').css('opacity', '0');
    $('.data__text').css('opacity', '0');
    $('.data__button-group').css('opacity', '0');
    $('.data__bullet').css('opacity', '0');
        //', .data__text, .data__button-group, .data__bullets {
//  opacity: 0;
//}

        $('#fullpage').fullpage({
            sectionsColor: ['white', '#131a1f', '#131a1f', '', '', '#131a1f', '', '#131a1f', '#131a1f'],
            verticalCentered: false,
            anchors: ['', 'dream_page', 'why_page', 'how_page', 'prod_page', 'opacity_page', 'team_page', 'team_page2', 'form_page'],
            menu: '#myMenu',
            //navigation: false,
            textColor: '#bc8a4b',
            bulletsColor: '#fff',
            navigation: true,
            navigationPosition: 'left',
            slidesNavigation: false,
            slidesNavPosition: 'top',

            onLeave: function (index, nextIndex, direction) {
                //after leaving section 2
                if (index == 1 && direction == 'down') {
                    //alert("Going to section 3!");
                   // $('.header__tel').fadeTo(1000, 0);

                }
                if (index == 2 && direction == 'up') {
                    //alert("Going to section 3!");
                    //$('.header__tel').fadeTo(1000, 1);
                }
            },
            afterLoad: function(anchorLink, index){
                var loadedSection = $(this);

                loadedSection.find('.data__title').addClass('animated fadeInUp');
                setTimeout(function() { loadedSection.find('.data__text').addClass('animated fadeInUp') }, 100);
                setTimeout(function() { loadedSection.find('.data__button-group').addClass('animated fadeInUp') }, 100);
                //setTimeout(function() { loadedSection.find('.data__bullets').addClass('animated fadeInUp') }, 100);

                //using index
                if(index == 1){
                    //alert("Section 3 ended loading");
                    // $( "#first" ).animate({
                    //     //backgroundSize: '110%'
                    //     transform: scale(1.05, 1.05)
                    //     //'background-size': '110% 120%'
                    // }, 3000, function() {
                    //     // Animation complete.
                    // });
                    $('.data__play-wrapper').css('opacity','0');
                    $( ".first__bg" ).css('transform','scale(1.1, 1.1)');
                    $("#first .data__play-wrapper").css('transition','0.4s');
                    $('.header__logo').css({
                        'opacity':'1',
                        'transition':'0.2s'
                    });
                    setTimeout(function(){
                        $("#first .data__play-wrapper").css({
                            'opacity' : '1'
                        });
                    }, 600);
                    setTimeout(function(){
                        $("#first .data__play-wrapper").css({
                            'transform' : 'scale(1.2, 1.2)'
                        });
                    }, 900);
                    setTimeout(function(){
                        $("#first .data__play-wrapper").css({
                            'transform' : 'scale(1, 1)'
                        });
                    }, 1200);

                    // loadedSection.find('.data__title').addClass('animated fadeInUp');
                    // setTimeout(function() { loadedSection.find('.data__text').addClass('animated fadeInUp') }, 100);
                    // setTimeout(function() { loadedSection.find('.data__button-group').addClass('animated fadeInUp') }, 100);

                    // loadedSection.find('.data__text').addClass('animated fadeInUp');
                    // loadedSection.find('.data__text').delay(2000).slideDown();
                }
                if(index == 2){
                    $('.header__logo').css('opacity','0');
                    //alert("Section 3 ended loading");
                    //$( "#first" ).css('background-size', '100% 100%');
                }

                if(index == 3 ){
                    //alert("Section 3 ended loading");
                    setTimeout(function() {loadedSection.find('.data__bullet:first-child').addClass('animated fadeInUp') }, 100);
                    setTimeout(function() {loadedSection.find('.data__bullet:nth-child(2)').addClass('animated' +
                        ' fadeInUp') }, 200);
                    setTimeout(function() {loadedSection.find('.data__bullet:nth-child(3)').addClass('animated' +
                        ' fadeInUp') }, 300);
                    setTimeout(function() {loadedSection.find('.data__bullet:nth-child(4)').addClass('animated' +
                        ' fadeInUp') }, 400);
                    //loadedSection.find('.data__bullets').find(">:first-child").addClass('animated' +
                    //$( "#first" ).css('background-size', '100% 100%');
                }
                if(index == 4 || index == 6){
                    //alert("Section 3 ended loading");
                    setTimeout(function() {loadedSection.find('.data__bullet:first-child').addClass('animated fadeInUp') }, 100);
                    setTimeout(function() {loadedSection.find('.data__bullet:nth-child(2)').addClass('animated' +
                        ' fadeInUp') }, 200);
                    setTimeout(function() {loadedSection.find('.data__bullet:nth-child(3)').addClass('animated' +
                        ' fadeInUp') }, 300);
                    // setTimeout(function() {loadedSection.find('.data__bullet:nth-child(4)').addClass('animated' +
                    //     ' fadeInUp') }, 400);
                    //loadedSection.find('.data__bullets').find(">:first-child").addClass('animated' +
                    //$( "#first" ).css('background-size', '100% 100%');
                }

                if(index == 5){
                    $("#prod .data__play").css('transition','0.4s');
                    setTimeout(function(){
                        $("#prod .data__play-wrapper").css({
                            'opacity' : '1'
                        });
                    }, 600);
                    setTimeout(function(){
                        $("#prod .data__play").css({
                            'transform' : 'scale(1.2, 1.2)'
                        });
                    }, 900);
                    setTimeout(function(){
                        $("#prod .data__play").css({
                            'transform' : 'scale(1, 1)'
                        });
                    }, 1200);
                }
                //using anchorLink
                // if(anchorLink == 'secondSlide'){
                //     alert("Section 2 ended loading");
                // }
            }

        });

        $('#nav__down').click(function () {
            //.pagepiling.moveSectionDown();
            $.fn.pagepiling.moveSectionDown();
        });

        $('#nav__up').click(function () {
            //.pagepiling.moveSectionDown();
            $.fn.pagepiling.moveSectionUp();
        });

        $('.data_foto-card').mouseenter(function () {
            $(this).addClass('flipped');
        });
        $('.data_foto-card').mouseleave(function () {
            $(this).removeClass('flipped');
        });

        $('#myMenu a').click(function () {
            $('#menu').fadeOut();
            parent.jQuery.fancybox.getInstance().close();

        });
    }
    else {
        $('#dream').slick({
            //setting-name: setting-value
            nextArrow: $('.js-fp-next'),
            prevArrow: $('.js-fp-prev'),
            slide: '.slide'
        });

        $('#dream .fp-next').click(function () {
            $('#dream').slick('slickNext');
        });
        $('#dream .fp-prev').click(function () {
            $('#dream').slick('slickPrev');
        });

        $('.data__right').slick({
            //setting-name: setting-value
            nextArrow: $('.fp-next'),
            prevArrow: $('.fp-prev'),
        });
        $('.data_foto-card').click(function () {
            $(this).toggleClass('flipped');
        });
        $('#myMenu a').click(function () {
            $('#menu').fadeOut();
            parent.jQuery.fancybox.getInstance().close();
            //console.log($(this).data('href'));
            //$( "#dream" ).scroll();
            scrollTo($(this).data('href'));

        });
        $('.data__button').click(function () {
            //$('#menu').fadeOut();
            //parent.jQuery.fancybox.getInstance().close();
            //console.log($(this).data('href'));
            //$( "#dream" ).scroll();
            scrollTo($(this).data('href'));

        });

    }

    function scrollTo(href_id) {
        $('html, body').animate({ scrollTop: $(href_id).offset().top }, 'slow');
        return false;
    }



    $(".js-popup").fancybox({
        padding: 0
    });
    //$('form').validate();
    $('.js-phone').mask("+7(999)999-9999", {autoclear: false});

    // $('#menu').fancybox({
    //           //smallBtn: false,
    // });


    //$('#nav__up').click.pagepiling.moveSectionUp();

    // $('.js-slider').slick({
    //     adaptiveHeight: true
    // });
});