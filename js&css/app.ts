// app.ts

// Penggunaan fungsi di dalam event listener jika diperlukan
$(document).ready(function() {
    // Contoh penggunaan fungsi pada event
    $(".navbar-brand").click(function() {
        let nama = "Adzandyma Al Aziz";
        let panjang = hitungPanjangString(nama);
        console.log(`Panjang nama: ${panjang}`);
    });
    
    // Pengaturan smooth scrolling
    $("a").on('click', function(event) {
        // Kode smooth scrolling
        let target = $(this).attr("href");
        if (target && target !== "") {
            event.preventDefault();
             // Menggunakan conditional operator untuk menangani tipe target
             let offsetTop = $(target)?.offset()?.top ?? 0;
            $('html, body').animate({
                scrollTop: offsetTop
            }, 800, function() {
                window.location.hash = target;
            });
        }
    });
});
// Event listener untuk klik pada nama
$(".navbar-brand").on('click', function(event) {
    // Misalnya, untuk navigasi ke bagian about pada halaman
    let target = "#about";

    // Menggunakan animasi smooth scrolling ke bagian about
    let offsetTop = $(target)?.offset()?.top ?? 0;
    $('html, body').animate({
        scrollTop: offsetTop
    }, 800);

    // Tambahkan tindakan lainnya di sini
    alert("Anda mengklik nama Saya dan Anda akan diarahkan ke bagian About!");
});

// Contoh fungsi untuk menghitung panjang string
function hitungPanjangString(input: string): number {
    return input.length;
}
