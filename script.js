$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });
    // toggle navbar/menu script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.navbar .menu-btn i').toggleClass('active');
    })
})