$('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
    $('.nav-toggle').toggleClass('active');
});

$('#hide-button').on('click', function(){
    $('#video').toggleClass('video-display');
});

$('.two').on('click', function(){
    $('#video').toggleClass('video-display');
});

$('#jauns2').on('click', function(){
    $('#video').toggleClass('video-display');
});

$('#button-skatit').on('click', function(){
    $('.skatit').toggleClass('show');
    $('.skatit-span-mazak').toggleClass('show');
    $('.skatit-span-vairak').toggleClass('show');
    $('.skatit-hide1').toggleClass('show');
    $('.skatit-hide2').toggleClass('show');
});


if ($(window).width() < 490) {
  document.getElementById("footer-img").src="assets/img/ideja/m-footer.png";
  document.getElementById("footer").style.paddingTop = '2px';
}
else {
  document.getElementById("footer-img").src="assets/img/ideja/footer.png";
  document.getElementById("footer").style.paddingTop = '20px';
}

$(window).resize(function() {
if ($(window).width() < 490) {
  document.getElementById("footer-img").src="assets/img/ideja/m-footer.png";
  document.getElementById("footer").style.paddingTop = '2px';
}
else {
  document.getElementById("footer-img").src="assets/img/ideja/footer.png";
  document.getElementById("footer").style.paddingTop = '20px';
}
});