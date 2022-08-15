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


if ($(window).width() < 870) {
    document.getElementById("java").src="assets/img/ideja/Juris2.png";
}
 else {
    document.getElementById("java").src="assets/img/ideja/Juris.png";
}

$(window).resize(function() {
  if ($(window).width() < 870) {
    document.getElementById("java").src="assets/img/ideja/Juris2.png";
  }
 else {
    document.getElementById("java").src="assets/img/ideja/Juris.png";
 }
});


if ($(window).width() < 510) {
  document.getElementById("java").src="assets/img/ideja/Juris_mobile.png";
}

$(window).resize(function() {
if ($(window).width() < 510) {
  document.getElementById("java").src="assets/img/ideja/Juris_mobile.png";
}
});
