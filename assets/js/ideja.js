$('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
    $('.nav-toggle').toggleClass('active');
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
else {
  document.getElementById("java").src="assets/img/ideja/Juris2.png";
}

$(window).resize(function() {
if ($(window).width() < 510) {
  document.getElementById("java").src="assets/img/ideja/Juris_mobile.png";
}
else {
  document.getElementById("java").src="assets/img/ideja/Juris2.png";
}
});
