// app.ts --> ke javascript
$(document).ready(function () {
    // Contoh penggunaan fungsi pada event
    $(".navbar-brand").click(function () {
        var nama = "Adzandyma Al Aziz";
        var panjang = hitungPanjangString(nama);
        console.log("Panjang nama: ".concat(panjang));
    });
    $("a").on('click', function (event) {
        var _a, _b;
        var target = $(this).attr("href");
        // Hanya mencegah default jika href adalah anchor pada halaman yang sama
        if (target.startsWith("#")) {
            event.preventDefault();
            var offsetTop = (_b = (_a = $(target).offset()) === null || _a === void 0 ? void 0 : _a.top) !== null && _b !== void 0 ? _b : 0;
            $('html, body').animate({
                scrollTop: offsetTop
            }, 800, function () {
                window.location.hash = target;
            });
        }
    });
});
$(".hamburger-menu").on('click', function () {
    $(".navbar-items").toggleClass("show");
});
$(".navbar-brand").on('click', function (event) {
    var _a, _b, _c;
    var target = "#about";
    var offsetTop = (_c = (_b = (_a = $(target)) === null || _a === void 0 ? void 0 : _a.offset()) === null || _b === void 0 ? void 0 : _b.top) !== null && _c !== void 0 ? _c : 0;
    $('html, body').animate({
        scrollTop: offsetTop
    }, 800);
    alert("Anda mengklik nama Saya dan Anda akan diarahkan ke bagian About!");
});
function hitungPanjangString(input) {
    return input.length;
}
window.addEventListener('load', function () {
    setTimeout(function () {
        var loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 2000);
});
