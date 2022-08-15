$('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
    $('.nav-toggle').toggleClass('active');
  });

// COOKIE
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


function checkCookies() {
  let cookieNote = document.getElementById('cookie_note');
  let cookieBtnAccept = cookieNote.querySelector('.cookie_accept');

  if (!getCookie('cookies_policy')) {
      cookieNote.classList.add('show');
  }

  cookieBtnAccept.addEventListener('click', function () {
      setCookie('cookies_policy', 'true', 365);
      cookieNote.classList.remove('show');
  });
}

checkCookies();

if ($(window).width() < 490) {
  document.getElementById("support3").src="assets/img/ideja/m-footer.png";
  document.getElementById("support4").src="assets/img/support4.png";
  document.getElementById("footer").style.marginTop = '-2px';
  document.getElementById("id-sp").style.paddingBottom = '85px';
  document.getElementById("support3").style.marginTop = '-40px';
  document.getElementById("footer").style.paddingTop = '2px';
  document.getElementById("container-footer").style.marginTop = '0px';
}
else {
  document.getElementById("support3").src="assets/img/Group 9_down.png";
  document.getElementById("support4").src="assets/img/Group 9_up.png";
  document.getElementById("footer").style.marginTop = '-50px';
  document.getElementById("id-sp").style.paddingBottom = '100px';
  document.getElementById("support3").style.marginTop = '-5px';
  document.getElementById("footer").style.paddingTop = '50px';
  document.getElementById("container-footer").style.marginTop = '35px';
}

$(window).resize(function() {
if ($(window).width() < 490) {
  document.getElementById("support3").src="assets/img/ideja/m-footer.png";
  document.getElementById("support4").src="assets/img/support4.png";
  document.getElementById("footer").style.marginTop = '-2px';
  document.getElementById("id-sp").style.paddingBottom = '85px';
  document.getElementById("support3").style.marginTop = '-40px';
  document.getElementById("footer").style.paddingTop = '2px';
  document.getElementById("container-footer").style.marginTop = '0px';
}
else {
  document.getElementById("support3").src="assets/img/Group 9_down.png";
  document.getElementById("support4").src="assets/img/Group 9_up.png";
  document.getElementById("footer").style.marginTop = '-50px';
  document.getElementById("id-sp").style.paddingBottom = '100px';
  document.getElementById("support3").style.marginTop = '-5px';
  document.getElementById("footer").style.paddingTop = '50px';
  document.getElementById("container-footer").style.marginTop = '35px';
}
});


if ($(window).width() < 350) {
  document.getElementById("support3").style.marginTop = '-35px';
}

$(window).resize(function() {
if ($(window).width() < 350) {
  document.getElementById("support3").style.marginTop = '-35px';
}
});

if ($(window).width() < 786 && $(window).width() > 489) {
  document.getElementById("id-sp").style.paddingBottom = '55px';
}

$(window).resize(function() {
if ($(window).width() < 786 && $(window).width() > 489) {
  document.getElementById("id-sp").style.paddingBottom = '55px';
}
});

