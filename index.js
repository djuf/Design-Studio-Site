// Vars
const nav = $("#nav");
const hamburgerLine = $(".hamburger__line");
let from = $(".scroll:eq( 2 )").offset().top - 100;
let to = 999999;
const links = $(".nav__link");
const navLine = $(".nav__line");
let flag = true;
const arrowDown = $("#arrowDown");
const team = $("#team__description");
const member = $("#team__member");
const position = $("#team__position");
const desc = $("#team__desc");

$(window).on('load', () => {
    $.scrollify({
        section: ".scroll",
        easing: "swing",
        scrollSpeed: 1100,
        setHeights: false,
        updateHash: false,
      
        touchScroll: false
    });

    // Add events
    $(".hamburger").on('click', hamburgerClick);
    $(window).on('scroll', scrollDetect);
    links.on('click', linkScroll);
    $(".contact__input").on('focus', labelUp);
    $(".contact__input").on('focusout', labelDown);
    mobile();
    $('#cards--slider').on('beforeChange', changeTeamDesc);
    sliderAboutUs();
    $('.slider__blocks').on('afterChange', sliderDots);
    $(".offer__offer").on('mouseover', showOffer);
    $(".offer__offer").on('mouseout', hideOffer);
});

const changeTeamDesc = function (event, slick, currentSlide, nextSlide) {
    team.addClass('fadeOut');
    team.removeClass('fadeIn');
    const dot1 = $(".team__dot:eq( 0 )");
    const dot2 = $(".team__dot:eq( 1 )");
    const dot3 = $(".team__dot:eq( 2 )");
    const text1 = "Nie tylko Graphic Designer, lecz także CEO oraz Account Manager. Pomysłowy, jednocześnie rzetelny. Obsługa klienta to dla niego czysta przyjemność.";
    const text2 = "Skupiony, a w jego działaniach niemalże bezbłędny. Motywacji oraz chęci rozwoju mu nigdy nie brak. Jest on rozwiązaniem każdego problemu.";
    const text3 = "Efektywność jego programowania nie zna końca. Człowiek, który zawsze oczekuje wyzwania oraz realizacji czegoś nieszablonowego, niezwykłego.";
    setTimeout(() => {
        switch (nextSlide) {
            case 0:
                member.text('Oliver');
                position.text('Graphic Designer');
                desc.text(text1);
                dot1.addClass('team__dot--active');
                dot2.removeClass('team__dot--active');
                dot3.removeClass('team__dot--active');
                break;
            case 1:
                member.text('Dominik');
                position.text('Front-End Developer');
                desc.text(text2);
                dot2.addClass('team__dot--active');
                dot1.removeClass('team__dot--active');
                dot3.removeClass('team__dot--active');
                break;
            case 2:
                member.text('Dawid');
                position.text('Front-End Developer');
                desc.text(text3);
                dot3.addClass('team__dot--active');
                dot2.removeClass('team__dot--active');
                dot1.removeClass('team__dot--active');
                break;
            case 3:
            dot1.addClass('team__dot--active');
            dot2.removeClass('team__dot--active');
            dot3.removeClass('team__dot--active');
                member.text('Oliver');
                position.text('Graphic Designer');
                desc.text(text1);
                break;
            case 4:
            dot2.addClass('team__dot--active');
            dot1.removeClass('team__dot--active');
            dot3.removeClass('team__dot--active');
                member.text('Dominik');
                position.text('Front-End Developer');
                desc.text(text2);
                break;
            case 5:
            dot3.addClass('team__dot--active');
            dot2.removeClass('team__dot--active');
            dot1.removeClass('team__dot--active');
                member.text('Dawid');
                position.text('Front-End Developer');
                desc.text(text3);
                break;
        }
        team.addClass('fadeIn');
        team.removeClass('fadeOut');
    }, 500);
};

// Slider
// Header
const sliderAboutUs = () => {
    $(".slider__blocks").slick({
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        autoplay: false,
        draggable: false,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
}



const headerSlider = () => {
    $("#header--slider").slick({
        infinite: true,
        speed: 1000,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
}

const teamSlider = () => {
    $("#cards--slider").slick({
        infinite: true,
        speed: 1000,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0",
        autoplay: true,
        autoplaySpeed: 15000,
        focusOnSelect: true,
        draggable: false
    });
}
// Hamburger Click && Nav Show
const hamburgerClick = () => {
    hamburgerLine.removeClass("hamburger--black");
    hamburgerLine.removeClass("hamburger--white");
    $(".hamburger").toggleClass("show");
    if (flag == true) {
        navShow();
    } else {
        navHide();
    }
};

const navShow = () => {
   
    nav.css("display", "flex");
    nav.removeClass("fadeOut");
    nav.addClass("fadeIn");
    flag = !flag;
    $.scrollify.disable();
};

const navHide = () => {
    setTimeout(() => {
        nav.hide();
    }, 1000);
    $.scrollify.enable();
    nav.removeClass("fadeIn");
    nav.addClass("fadeOut");
    flag = !flag;
    scrollDetect();
    setTimeout(() => {
        mobile();
    }, 1100);
};

// Detect scroll height and change hamburger color
const scrollDetect = () => {
    if ($(window).scrollTop() >= from && $(window).scrollTop() <= to) {
        hamburgerLine.addClass("hamburger--black");
        hamburgerLine.removeClass("hamburger--white");
    } else {
        hamburgerLine.addClass("hamburger--white");
        hamburgerLine.removeClass("hamburger--black");
    }
};


// Link scrolling
const linkScroll = function (e) {
    e.preventDefault();
    $(".hamburger").toggleClass("show");
    navHide();
    $.scrollify.move(this.hash);
    if (this.hash == '#index') {
        $("body").css("overflow", "hidden");
        $('.reload').css('display', 'block');
        $('.reload').addClass('fadeIn');
        setTimeout(() => {
            $.scrollify.instantMove("#1");
        }, 1000);
        setTimeout(() => {
            location.reload()
        }, 2500);
    }
    if(this.hash == '#4') {
       $('.offer__offer').css('transform',' matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)');
    }
};

// Mobile detect
const mobile = () => {
    if (window.matchMedia("(max-width:1200px)").matches) {
        from = (from / 2) + 100;
        animationsMobile();
        $("body").css("overflow", "auto");
        teamSlider();
        $.scrollify.disable();
    } else {
        animationsDesktop();
        $.scrollify.enable();
    }
};

// Label in form
const labelUp = function () {
    const number = $(".contact__input").index(this);
    $(".contact__label").eq(number).addClass("up");
}



const labelDown = function () { 
    if ($(this).val().length == 0) {
        const number = $(".contact__input").index(this);
        $(".contact__label").eq(number).removeClass("up");
    }
}

const animationsDesktop = () => {
    ScrollReveal().reveal('.header__header', {
        origin: 'right',
        distance: '200%',
        duration: 2000,
        easing: 'ease',
        afterReveal: headerSlider

    });
    ScrollReveal().reveal('.header__slider', {
        origin: 'bottom',
        distance: '200%',
        duration: 1000,
        delay: 2000,
        easing: 'ease',

    });
    ScrollReveal().reveal('.about__content', {
        origin: 'right',
        distance: '200%',
        duration: 2000,
        delay: 1000,
        easing: 'ease'
    });
    ScrollReveal().reveal('.about__link', {
        origin: 'bottom',
        distance: '200%',
        duration: 1000,
        delay: 2800,
        easing: 'ease'
    });
    ScrollReveal().reveal('.about__phones', {
        opacity: 0,
        distance: '0px',
        duration: 1000,
        delay: 500
    });
    ScrollReveal().reveal('.team__desc', {
        origin: 'right',
        distance: '100%',
        duration: 2000,
        delay: 1000,
        easing: 'ease'
    });
    ScrollReveal().reveal('.team__gallery', {
        opacity: 0,
        distance: '0px',
        duration: 2000,
        delay: 500,
        beforeReveal: teamSlider
    });

    ScrollReveal().reveal('.offer', {
        opacity: 0,
        distance: '0px',
        duration: 1,
        delay: 0
    });

    ScrollReveal().reveal('.offer__header', {
        opacity: 0,
        distance: '0px',
        duration: 1000,
        delay: 500
    });

    ScrollReveal().reveal('.offer__offer--first', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        delay: 2500,
        easing: 'ease'
    });
    ScrollReveal().reveal('.offer__offer--second', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        delay: 2125,
        easing: 'ease'
    });
    ScrollReveal().reveal('.offer__offer--third', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        delay: 1750,
        easing: 'ease'
    });
    ScrollReveal().reveal('.offer__offer--fourth', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        delay: 1375,
        easing: 'ease'
    });
    ScrollReveal().reveal('.offer__offer--fifth', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        delay: 1000,
        easing: 'ease'
    });
    ScrollReveal().reveal('.phone', {
        origin: 'right',
        distance: '100%',
        duration: 1500,
        delay: 1000,
        easing: 'ease'
    });
    ScrollReveal().reveal('.mail', {
        origin: 'right',
        distance: '100%',
        duration: 1500,
        delay: 1375,
        easing: 'ease'
    });
    ScrollReveal().reveal('.messenger', {
        origin: 'right',
        distance: '100%',
        duration: 1500,
        delay: 1750,
        easing: 'ease'
    });
    ScrollReveal().reveal('.contact__header', {
        opacity: 0,
        distance: '0px',
        duration: 1000,
        delay: 500
    });
    ScrollReveal().reveal('.contact__form', {
        opacity: 0,
        distance: '0px',
        duration: 1000,
        delay: 500
    });
    ScrollReveal().reveal('.slider__heading', {
        opacity: 0,
        distance: '0px',
        duration: 1000,
        delay: 500
    });
    ScrollReveal().reveal('.slider__blocks', {
        origin: 'bottom',
        distance: '100%',
        duration: 1500,
        delay: 1000,
        easing: 'ease'
    });
}

const showOffer = function(){
    const offerIndex = $(this).index() - 1;
        $(`.offer__text:eq(${offerIndex})`).addClass('fadeInOffer');
        $(`.offer__text:eq(${offerIndex})`).removeClass('fadeOutOffer');
        $(`.offer__offer:eq(${offerIndex})`).addClass('offer__offer--hover');
        $(`.offer__name:eq(${offerIndex})`).addClass('offer--down');
        $(`.offer__arrow:eq(${offerIndex})`).addClass('offer__arrow--down')
  
}

const hideOffer = function(){
    const offerIndex = $(this).index() - 1;
    $(`.offer__text:eq(${offerIndex})`).addClass('fadeOutOffer');
    $(`.offer__text:eq(${offerIndex})`).removeClass('fadeInOffer');
    $(`.offer__offer:eq(${offerIndex})`).removeClass('offer__offer--hover');
    $(`.offer__name:eq(${offerIndex})`).removeClass('offer--down');
    $(`.offer__arrow:eq(${offerIndex})`).removeClass('offer__arrow--down')
}

const sliderDots = function (event, slick, currentSlide, nextSlide) { 
    if (window.matchMedia("(max-width:1200px)").matches) {
        if (currentSlide == 0) {
            $('.slick-prev').addClass('fadeOut');
            $('.slick-prev').removeClass('fadeIn');
        } else {
            $('.slick-prev').addClass('fadeIn');
            $('.slick-prev').removeClass('fadeOut');
        }
        if (currentSlide >= 5) {
            $('.slick-next').addClass('fadeOut');
            $('.slick-next').removeClass('fadeIn');
        } else {
            $('.slick-next').addClass('fadeIn');
            $('.slick-next').removeClass('fadeOut');
        }
    }else{
        if (currentSlide == 0) {
            $('.slick-prev').addClass('fadeOut');
            $('.slick-prev').removeClass('fadeIn');
        } else {
            $('.slick-prev').addClass('fadeIn');
            $('.slick-prev').removeClass('fadeOut');
        }
        if (currentSlide >= 3) {
            $('.slick-next').addClass('fadeOut');
            $('.slick-next').removeClass('fadeIn');
        } else {
            $('.slick-next').addClass('fadeIn');
            $('.slick-next').removeClass('fadeOut');
        }
    }

}


