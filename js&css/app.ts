// app.ts --> ke javascript


$(document).ready(function() {
    // Contoh penggunaan fungsi pada event
    $(".navbar-brand").click(function() {
        let nama = "Adzandyma Al Aziz";
        let panjang = hitungPanjangString(nama);
        console.log(`Panjang nama: ${panjang}`);
    });
    
    
    $("a").on('click', function(event) {
        let target = $(this).attr("href");
        // Hanya mencegah default jika href adalah anchor pada halaman yang sama
        if (target.startsWith("#")) {
            event.preventDefault();
            let offsetTop = $(target).offset()?.top ?? 0;
            $('html, body').animate({
                scrollTop: offsetTop
            }, 800, function() {
                window.location.hash = target;
            });
        }
    });
});
$(".hamburger-menu").on('click', () => {
    $(".navbar-items").toggleClass("show");
});

$(".navbar-brand").on('click', function(event) {
   
    let target = "#about";

 
    let offsetTop = $(target)?.offset()?.top ?? 0;
    $('html, body').animate({
        scrollTop: offsetTop
    }, 800);

   
    alert("Anda mengklik nama Saya dan Anda akan diarahkan ke bagian About!");
});


function hitungPanjangString(input: string): number {
    return input.length;
}


window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'none';
    }
  }, 2000);
});
