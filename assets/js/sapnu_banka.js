$('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
    $('.nav-toggle').toggleClass('active');
  });


if ($(window).width() < 770 && $(window).width() > 684) {
    document.getElementById("velies3").innerHTML = "VĒLIES PIEPILDĪT SAVU SAPNI?";
}
 else {
    document.getElementById("velies3").innerHTML = "VĒLIES PALĪDZĒT KĀDĀM PIEPILDĪT SAPNI?";
}

$(window).resize(function() {
  if ($(window).width() < 770 && $(window).width() > 684) {
    document.getElementById("velies3").innerHTML = "VĒLIES PIEPILDĪT SAVU SAPNI?";
  }
 else {
    document.getElementById("velies3").innerHTML = "VĒLIES PALĪDZĒT KĀDĀM PIEPILDĪT SAPNI?";
 }
});

