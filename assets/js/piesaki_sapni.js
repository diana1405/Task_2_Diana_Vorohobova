$('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
    $('.nav-toggle').toggleClass('active');
  });

$('#submit').on('click', function(){
    $('#paldies').toggleClass('paldies2');
    $('#submit').toggleClass('submit2');
    $('#obligati').toggleClass('submit2');
    $('#check').toggleClass('submit2');
  });