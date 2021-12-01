$(function () {
    $(window).scroll(function () {

        var ws = $(this).scrollTop();

        // 환영
        if (ws > 100) {
            $('#welcome').css("transform", "translateY(0px)").css("opacity", "1");
        }

        // content_1
        if (ws > 250) {
            $('.content_1 img').css("transform", "translateX(0px)").css("opacity", "1");
        }
        if (ws > 400) {
            $('.c1_text').css("transform", "translateX(0px)").css("opacity", "1");
        }

        // content_2
        if (ws > 700) {
            $('.c2_text').css("transform", "translateX(0px)").css("opacity", "1");
            $('.content_2 img').css("transform", "translateX(0px)").css("opacity", "1");
        }

        // content_3
        if (ws > 800) {
            $('.content_3 img').css("transform", "translateX(0px)").css("opacity", "1");
        }
        if (ws > 950) {
            $('.c3_text').css("transform", "translateX(0px)").css("opacity", "1");
        }

        if (ws > 950) {
            $('.c3_text').css("transform", "translateX(0px)").css("opacity", "1");
        }

        // master
        if (ws > 1150) {
            $('#master').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (ws > 1350) {
            $('.master_img img').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (ws > 1950) {
            $('.master_text').css("transform", "translateY(0px)").css("opacity", "1");
        }

        // quetion
        if (ws > 2150) {
            $('#quetion').css("transform", "translateY(0px)").css("opacity", "1");
        }
        if (ws > 2450) {
            $('.quetion_box').css("transform", "translateY(0px)").css("opacity", "1");
        }
        // review
        if (ws > 2750) {
            $('#review').css("transform", "translateY(0px)").css("opacity", "1");
        }
        if (ws > 3050) {
            $('.review_text1').css("transform", "translateY(0px)").css("opacity", "1");
            $('.review_text2').css("transform", "translateY(0px)").css("opacity", "1");
            $('.review_text3').css("transform", "translateY(0px)").css("opacity", "1");
            $('.review_img').css("transform", "translateY(0px)").css("opacity", "1");
        }
    });
});

$(document).ready(function () {
    $(".quetion_btn1").click(function () {
        $(".quetion_a1").slideToggle()
        $(".quetion_a2").slideUp()
        $(".quetion_a3").slideUp()
        $(".quetion_a4").slideUp()
    });
    $(".quetion_btn2").click(function () {
        $(".quetion_a2").slideToggle()
        $(".quetion_a1").slideUp()
        $(".quetion_a3").slideUp()
        $(".quetion_a4").slideUp()
    });
    $(".quetion_btn3").click(function () {
        $(".quetion_a3").slideToggle()
        $(".quetion_a2").slideUp()
        $(".quetion_a1").slideUp()
        $(".quetion_a4").slideUp()
    });
    $(".quetion_btn4").click(function () {
        $(".quetion_a4").slideToggle()
        $(".quetion_a2").slideUp()
        $(".quetion_a3").slideUp()
        $(".quetion_a1").slideUp()
    });
});

$(document).ready(function () {
    $(".list").click(function () {
        $("#menu").fadeIn()
    });
    $(".cancel").click(function () {
        $("#menu").fadeOut()
    });
});


//review
function review_left() {

    $('.review_box li:last').prependTo('.review_box');
    $('.review_box').css('margin-left', -355);
    $('.review_box').stop().animate({ marginLeft: 0 }, 800);
}



function review_right() {

    $('.review_box').stop().animate({ marginLeft: -350 }, function () {
        $('.review_box li:first').appendTo('.review_box');
        $('.review_box').css({ marginLeft: 0 });
    });

}



function slide() {

    $('.review_box').stop().animate({ marginLeft: -350 }, function () {
        $('.review_box li:first').appendTo('.review_box');
        $('.review_box').css({ marginLeft: 0 });
    });

}



setInterval(slide, 3000);



$('.review_left').click(function () {
    review_left();
});



$('.review_right').click(function () {
    review_right();
});