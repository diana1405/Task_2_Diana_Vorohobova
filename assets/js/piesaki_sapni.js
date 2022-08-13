$('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
    $('.nav-toggle').toggleClass('active');
  });


function checkRiga() {
    if (document.getElementById("name").value == ""
     || document.getElementById("email").value == ""
     || document.getElementById("phone").value == ""
     || document.getElementById("jautajums").value == ""
     || document.getElementById("checkbox").checked == false) {
    } else {
      $('#paldies').addClass('paldies2');
      $('#submit').addClass('submit2');
      $('#obligati').addClass('submit2');
      $('#check').addClass('submit2');
    }
}

$('#submit').on('click', function(){
    checkRiga();
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