$('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
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