// app.ts
// Penggunaan fungsi di dalam event listener jika diperlukan
$(document).ready(function () {
    // Contoh penggunaan fungsi pada event
    $(".navbar-brand").click(function () {
        var nama = "Adzandyma Al Aziz";
        var panjang = hitungPanjangString(nama);
        console.log("Panjang nama: ".concat(panjang));
    });
    // Pengaturan smooth scrolling
    $("a").on('click', function (event) {
        var _a, _b, _c;
        // Kode smooth scrolling
        var target = $(this).attr("href");
        if (target && target !== "") {
            event.preventDefault();
            // Menggunakan conditional operator untuk menangani tipe target
            var offsetTop = (_c = (_b = (_a = $(target)) === null || _a === void 0 ? void 0 : _a.offset()) === null || _b === void 0 ? void 0 : _b.top) !== null && _c !== void 0 ? _c : 0;
            $('html, body').animate({
                scrollTop: offsetTop
            }, 800, function () {
                window.location.hash = target;
            });
        }
    });
});
// Event listener untuk klik pada nama
$(".navbar-brand").on('click', function (event) {
    var _a, _b, _c;
    // Misalnya, untuk navigasi ke bagian about pada halaman
    var target = "#about";
    // Menggunakan animasi smooth scrolling ke bagian about
    var offsetTop = (_c = (_b = (_a = $(target)) === null || _a === void 0 ? void 0 : _a.offset()) === null || _b === void 0 ? void 0 : _b.top) !== null && _c !== void 0 ? _c : 0;
    $('html, body').animate({
        scrollTop: offsetTop
    }, 800);
    // Tambahkan tindakan lainnya di sini
    alert("Anda mengklik nama Saya dan Anda akan diarahkan ke bagian About!");
});
// Contoh fungsi untuk menghitung panjang string
function hitungPanjangString(input) {
    return input.length;
}
