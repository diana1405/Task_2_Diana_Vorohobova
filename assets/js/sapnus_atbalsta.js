$('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
    $('.nav-toggle').toggleClass('active');
});

if ($(window).width() < 490) {
  document.getElementById("footer-img").src="assets/img/ideja/m-footer.png";
  document.getElementById("map").style.marginBottom = '-12%';
}
else {
  document.getElementById("footer-img").src="assets/img/ideja/footer-dekstop.png";
  document.getElementById("map").style.marginBottom = '-4%';
}

$(window).resize(function() {
if ($(window).width() < 490) {
  document.getElementById("footer-img").src="assets/img/ideja/m-footer.png";
  document.getElementById("map").style.marginBottom = '-12%';
}
else {
  document.getElementById("footer-img").src="assets/img/ideja/footer-dekstop.png";
  document.getElementById("map").style.marginBottom = '-4%';
}
});

function CustomZoomInControl(controlDiv, map) {

  // Set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'rgba(255, 168, 0, 0.5)';
  controlUI.style.borderRadius = '12px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '24px';
  controlUI.style.marginRight = '62px';
  controlUI.style.width = '56px';
  controlUI.style.height = '56px';
  controlUI.style.textAlign = 'center';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '35px';
  controlText.style.color = '#2F4858';
  controlText.style.fontWeight = 'bolder';
  controlText.style.paddingTop = '6px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = '+';
  controlUI.appendChild(controlText);

  // Setup the click event listeners
  google.maps.event.addDomListener(controlUI, 'click', function () {
      map.setZoom(map.getZoom() + 1);
  });

}

function CustomZoomOutControl(controlDiv, map) {

  // Set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'rgba(255, 168, 0, 0.5)';
  controlUI.style.borderRadius = '12px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '78px';
  controlUI.style.marginRight = '62px';
  controlUI.style.width = '56px';
  controlUI.style.height = '56px';
  controlUI.style.textAlign = 'center';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '45px';
  controlText.style.color = '#2F4858';
  controlText.style.fontWeight = 'bolder';
  controlText.style.paddingTop = '0px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = '-';
  controlUI.appendChild(controlText);

  // Setup the click event listeners
  google.maps.event.addDomListener(controlUI, 'click', function () {
      map.setZoom(map.getZoom() - 1);
  });

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
    zoomControl: false,
    mapId: '5aee6f55666babb5',
  });

  if ($(window).width() > 768) {
    var customZoomOutControlDiv = document.createElement('div');
    var customZoomOutControl = new CustomZoomOutControl(customZoomOutControlDiv, map);

    customZoomOutControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(customZoomOutControlDiv);

    var customZoomInControlDiv = document.createElement('div');
    var customZoomInControl = new CustomZoomInControl(customZoomInControlDiv, map);

    customZoomInControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(customZoomInControlDiv);
  }
  
  

  const popupContent = '<div class="karta-text"><div><img src="assets/img/sapnus_atbalsta/AUCHlogo.png"></div><div><h2>AUCH beauty home</h2><p>+371 28361686, +371 23202079<br>auchbeauty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>';
  const image = "assets/img/sapnus_atbalsta/yellow-marker.png";
  const image_grey = "assets/img/sapnus_atbalsta/yellow-marker.png";
  

  // The marker in the center
  const marker = new google.maps.Marker({
    position: { lat: 56.94, lng: 24.10 },
    map: map,
    icon: image_grey,
  });

  infowindow = new google.maps.InfoWindow({
    content: popupContent,
  });

  const a = new google.maps.Marker({ //show
    position: { lat: 56.9566, lng: 24.1356 },
    map: map,
    icon: image,
  });

  const b = new google.maps.Marker({ //show
    position: { lat: 56.9524, lng: 24.1271 },
    map: map,
    icon: image,
  });


  //OTHER MARKERS
  const c = new google.maps.Marker({
    position: { lat: 56.9376, lng: 24.0633 },
    map: map,
    icon: image,
  });

  const d = new google.maps.Marker({
    position: { lat: 56.9475, lng: 24.0769 },
    map: map,
    icon: image,
  });

  const e = new google.maps.Marker({
    position: { lat: 56.9406, lng: 24.0854 },
    map: map,
    icon: image,
  });

  const f = new google.maps.Marker({
    position: { lat: 56.9430, lng: 24.0886 },
    map: map,
    icon: image,
  });

  const g = new google.maps.Marker({
    position: { lat: 56.9405, lng: 24.0957 },
    map: map,
    icon: image,
  });

  const h = new google.maps.Marker({
    position: { lat: 56.9313, lng: 24.0912 },
    map: map,
    icon: image,
  });

  const i = new google.maps.Marker({
    position: { lat: 56.9536, lng: 24.1077 },
    map: map,
    icon: image,
  });

  const j = new google.maps.Marker({
    position: { lat: 56.9489, lng: 24.1109 },
    map: map,
    icon: image,
  });

  const k = new google.maps.Marker({
    position: { lat: 56.9449, lng: 24.1135 },
    map: map,
    icon: image,
  });

  const l = new google.maps.Marker({
    position: { lat: 56.9497, lng: 24.1159 },
    map: map,
    icon: image,
  });

  const m = new google.maps.Marker({
    position: { lat: 56.9541, lng: 24.1173 },
    map: map,
    icon: image,
  });

  const n = new google.maps.Marker({
    position: { lat: 56.9441, lng: 24.1217 },
    map: map,
    icon: image,
  });

  const o = new google.maps.Marker({
    position: { lat: 56.9513, lng: 24.1222 },
    map: map,
    icon: image,
  });

  const p = new google.maps.Marker({
    position: { lat: 56.9543, lng: 24.1234 },
    map: map,
    icon: image,
  });

  const q = new google.maps.Marker({
    position: { lat: 56.9466, lng: 24.1307 },
    map: map,
    icon: image,
  });

  const r = new google.maps.Marker({
    position: { lat: 56.9500, lng: 24.1335 },
    map: map,
    icon: image,
  });

  const s = new google.maps.Marker({
    position: { lat: 56.9461, lng: 24.1436 },
    map: map,
    icon: image,
  });

  const t = new google.maps.Marker({
    position: { lat: 56.9531, lng: 24.1504 },
    map: map,
    icon: image,
  });


  if (town.selectedIndex == 1 && type.selectedIndex == 1) {
    marker.setVisible(false);
    c.setVisible(false);
    d.setVisible(false);
    e.setVisible(false);
    f.setVisible(false);
    g.setVisible(false);
    h.setVisible(false);
    i.setVisible(false);
    j.setVisible(false);
    k.setVisible(false);
    l.setVisible(false);
    m.setVisible(false);
    n.setVisible(false);
    o.setVisible(false);
    p.setVisible(false);
    q.setVisible(false);
    r.setVisible(false);
    s.setVisible(false);
    t.setVisible(false);
  }

  marker.addListener('click', function() {
    infowindow.open(map, marker);
    marker.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
  });

  a.addListener('click', function() {
    infowindow.open(map, a);
    a.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
  });
  b.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, b);
  });
  c.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, c);
  });
  d.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, d);
  });
  e.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, e);
  });
  f.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, f);
  });
  g.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, g);
  });
  h.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, h);
  });
  i.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, i);
  });
  j.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, j);
  });
  k.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, k);
  });
  l.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, l);
  });
  m.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, m);
  });
  n.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, n);
  });
  o.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, o);
  });
  p.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, p);
  });
  q.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, q);
  });
  r.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, r);
  });
  s.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, s);
  });
  t.addListener('click', function() {
    a.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    b.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    c.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    d.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    e.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    f.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    g.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    h.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    i.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    j.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    k.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    l.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    m.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    n.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    o.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    p.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    q.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    r.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    s.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    t.setIcon("assets/img/sapnus_atbalsta/grey-marker.png");
    marker.setIcon("assets/img/sapnus_atbalsta/yellow-marker.png");
    infowindow.open(map, t);
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

var x, i, j, l, ll, selElmnt, a, b, c, riga, edisana;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        initMap();
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        // RĪGA - ĒDINAŠANA - START
        if (this.parentNode.previousSibling.innerHTML == 'Rīga') {
          riga = 'true';
        } else if (this.parentNode.previousSibling.innerHTML == 'Ēdinašana') {
          riga = riga;
        } else {
          riga = 'false';
        }

        if (this.parentNode.previousSibling.innerHTML == 'Ēdinašana') {
          edisana = 'true';
        } else if (this.parentNode.previousSibling.innerHTML == 'Izvēlies') {
          edisana = 'false';
        } else {
          edisana = edisana;
        }

        if (riga == 'true' && edisana == 'true') {
          $('#select-riga-edisana').addClass('select');
        } else {
          $('#select-riga-edisana').removeClass('select');
        }
        initMap();
        // RĪGA - ĒDINAŠANA - END
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);










