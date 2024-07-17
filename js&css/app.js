$(document).ready(function () {
    console.log("Document is ready");
    $(window).scroll(function () {
        console.log("Window is scrolling");
        var scrollTop = $(window).scrollTop() || 0;
        if (scrollTop > 550) {
            console.log("Scrolled more than 550px");
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        }
        else {
            console.log("Scrolled less than 550px");
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }
    });
    $("a").on('click', function (event) {
        var _a;
        console.log("Link clicked");
        if (this.hash !== "") {
            event.preventDefault();
            var hash_1 = this.hash;
            console.log("Hash is: " + hash_1);
            $('html, body').animate({
                scrollTop: (_a = $(hash_1).offset()) === null || _a === void 0 ? void 0 : _a.top
            }, 800, function () {
                window.location.hash = hash_1;
            });
        }
    });
});
