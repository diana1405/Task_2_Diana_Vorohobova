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