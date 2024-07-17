$(document).ready(function () {
    console.log("Document is ready");

    $(window).scroll(function () {
        console.log("Window is scrolling");

        const scrollTop = $(window).scrollTop() || 0;

        if (scrollTop > 550) {
            console.log("Scrolled more than 550px");
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            console.log("Scrolled less than 550px");
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }
    });

    $("a").on('click', function (event) {
        console.log("Link clicked");

        if ((this as HTMLAnchorElement).hash !== "") {
            event.preventDefault();

            const hash = (this as HTMLAnchorElement).hash;
            console.log("Hash is: " + hash);

            $('html, body').animate({
                scrollTop: $(hash).offset()?.top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
