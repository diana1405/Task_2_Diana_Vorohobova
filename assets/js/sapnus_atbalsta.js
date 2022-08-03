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
  // The map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 56.9489, lng: 24.1109 },
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapId: '5aee6f55666babb5',
  });

  const popupContent = '<div class="karta-text"><div><img src="assets/img/sapnus_atbalsta/AUCHlogo.png"></div><div><h2>AUCH beauty home</h2><p>+371 28361686, +371 23202079<br>auchbeauty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>';
  const image = "assets/img/sapnus_atbalsta/yellow-marker.png";
  const image_grey = "assets/img/sapnus_atbalsta/grey-marker.png";
  

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: { lat: 56.94, lng: 24.10 },
    map: map,
    icon: image,
  });

  infowindow = new google.maps.InfoWindow({
    content: popupContent,
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  //OTHER MARKERS
  new google.maps.Marker({
    position: { lat: 56.9376, lng: 24.0633 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9475, lng: 24.0769 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9406, lng: 24.0854 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9430, lng: 24.0886 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9405, lng: 24.0957 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9313, lng: 24.0912 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9536, lng: 24.1077 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9489, lng: 24.1109 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9449, lng: 24.1135 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9497, lng: 24.1159 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9541, lng: 24.1173 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9441, lng: 24.1217 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9513, lng: 24.1222 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9543, lng: 24.1234 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9524, lng: 24.1271 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9466, lng: 24.1307 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9500, lng: 24.1335 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9566, lng: 24.1356 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9461, lng: 24.1436 },
    map: map,
    icon: image,
  });

  new google.maps.Marker({
    position: { lat: 56.9531, lng: 24.1504 },
    map: map,
    icon: image,
  });
}

window.initMap = initMap;

//56.93768997592872, 24.06339755000021 //
//56.947525687825284, 24.076997455548835 //
//56.94069097660069, 24.08540189156203 //
//56.94302492128769, 24.088610858039797 //
//56.940524260676234, 24.09579283063289 //
//56.931353737020906, 24.09120859280751 //

//56.93827352274957, 24.102363571515937 //BLACK

//56.95360919379793, 24.10771184897888 //
//56.948942483372974, 24.11092081545664 //
//56.944941980862446, 24.113518550224356 //
//56.949775867368125, 24.11596347706456 //
//56.95419249152399, 24.117338748412177 //
//56.94419183885359, 24.12177017831004 //
//56.951359245634, 24.12222860209258 //
//56.95435914634056, 24.12345106551268 //
//56.95244257096163, 24.127118455772983 //
//56.946692253528596, 24.130785846033287 //
//56.950025878933836, 24.133536388728515 //
//56.950025878933836, 24.13368919665603 //OOPS
//56.95669223553419, 24.13567569971369 //
//56.946108838435684, 24.143621711944352 //
//56.953192546976446, 24.150498068682417 //



