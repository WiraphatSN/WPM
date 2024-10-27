$(window).on("load", function() {
  $(".loader-wrapper").fadeOut(1000);
});

function zCopy(text) {
    navigator.clipboard.writeText(text);
    const copySec = document.getElementById('copySec');
    copySec.classList.add('show'); // เพิ่มคลาส show
    // ตั้งเวลาให้หายไปหลัง 2 วินาที
    setTimeout(function() {
        copySec.classList.remove('show'); // ลบคลาส show
    }, 2000);
}

// Smooth Scroll
SmoothScroll({
    speed: 10,
    speedAsDuration: true,
    easing: 'easeInOutCubic',
    offset: 5,
    updateURL: true,
    popstate: true
  });