$(window).on("load", function() {
    $(".loader-wrapper").fadeOut(1000);
});



document.addEventListener('DOMContentLoaded', (event) => {
    const barmenu = document.getElementById('barmenu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    barmenu.addEventListener('click', (e) => {
        e.preventDefault();
        offScreenMenu.classList.toggle('active');
    });
});
