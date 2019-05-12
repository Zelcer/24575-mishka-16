ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
      center: [59.93871182, 30.32316715],
      zoom: 17
  });

  var myPlacemark = new ymaps.Placemark([59.93860297, 30.32317788], {
      hintContent: "Mishka"
  }, {
      iconLayout: "default#image",
      iconImageHref: "./img/icon-map-pin.svg",
      iconImageSize: [66, 101],
      iconImageOffset: [-35, -125]
  });

  myMap.geoObjects.add(myPlacemark);
}
