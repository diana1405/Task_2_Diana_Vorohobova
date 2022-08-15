$('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
    $('.nav-toggle').toggleClass('active');
});

$(window).resize(function() {
  if ($(window).width() > 1249) {
    $('#menu').removeClass('active');
    $('.nav-toggle').removeClass('active');
  }
});

// LANGUAGE
$('#lv2').on('click', function(){
    $('#lang').toggleClass('lang-active');
});

$(window).resize(function() {
  if ($(window).width() < 1249) {
    $('#lang').removeClass('lang-active');
  }
});

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('lang');
  if (!container.contains(e.target)) {
    $('#lang').removeClass('lang-active');
  }
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