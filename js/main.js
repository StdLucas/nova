 // 
 // Hambuerger
 // 
 // Look for .hamburger
 var hamburger = document.querySelector(".hamburger");
 // On click
 hamburger.addEventListener("click", function() {
     // Toggle class "is-active"
     hamburger.classList.toggle("is-active");
     // Do something else, like open/close menu
 });
 // 
 // Back-to-top
 // 
 var btn = $('.back-to-top');

 $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
         btn.addClass('show');
     } else {
         btn.removeClass('show');
     }
 });

 btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({ scrollTop: 0 }, '200');
 });

 //  
 // 
 // 
 $(function() {
     $('[data-toggle="popover"]').popover()
 });