// Corusel slick
$(document).ready(function () {
    $('.corusel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fa fa-paw prevArrow" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-paw nextArrow" aria-hidden="true"></i>'
    });
});

// Кнопки заказа и навигации
$(document).ready(function () {
    $("#toOrder").on("click", function (event) {
        event.preventDefault();
        var id = $('#form'),
            top = $(id).offset().top - 200;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.nav-link').click(function (e) {
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 51}, 200);
        e.preventDefault();
    });
});

// Скролл к продукции
$(document).ready(function () {
    var win = $(window);
    var newsBlock = $('#news-block');

    win.scroll(function () {
        if (win.scrollTop() + win.height() >= newsBlock.offset().top) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function () {
        var id = $('#product-block'),
            top = $(id).offset().top - 55;
        $('body,html').animate({scrollTop: top}, 800);

    });
});

// slicknav
$(function () {
    $('#nav').slicknav({
        prependTo: "header",
    });
});