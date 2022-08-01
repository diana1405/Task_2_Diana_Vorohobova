$('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
    $('.nav-toggle').toggleClass('active');
  });



function checkRiga() {
  if (town.selectedIndex == 1 && type.selectedIndex == 1) {
    $('#select-riga-edisana').addClass('select');
  } else {
    $('#select-riga-edisana').removeClass('select');
  }
}




// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 56.94, lng: 24.10 };
  
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapId: '5aee6f55666babb5',
  });

  const popupContent = '<div class="karta-text"><div><h1>AUCH</h1><p>beauty home</p></div><div><h2>AUCH beauty home</h2><p>+371 28361686, +371 23202079<br>auchbeauty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>';
  const image = "assets/img/sapnus_atbalsta/yellow-marker.png";
  

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: "Hello World!",
    icon: image,
  });

  infowindow = new google.maps.InfoWindow({
    content: popupContent,
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  

}

window.initMap = initMap;