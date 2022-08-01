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