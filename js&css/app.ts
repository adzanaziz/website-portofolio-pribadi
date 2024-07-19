// app.ts --> ke javascript


$(document).ready(function() {
    // Contoh penggunaan fungsi pada event
    $(".navbar-brand").click(function() {
        let nama = "Adzandyma Al Aziz";
        let panjang = hitungPanjangString(nama);
        console.log(`Panjang nama: ${panjang}`);
    });
    
    
    $("a").on('click', function(event) {
        // Kode smooth scrolling
        let target = $(this).attr("href");
        if (target && target !== "") {
            event.preventDefault();
             
             let offsetTop = $(target)?.offset()?.top ?? 0;
            $('html, body').animate({
                scrollTop: offsetTop
            }, 800, function() {
                window.location.hash = target;
            });
        }
    });
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