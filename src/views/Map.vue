<template>
  <div id="map" ref="map"></div>
</template>
    
<script>
export default {
  data: () => ({
    map: null,
    request: {},
  }),

  mounted() {
    var map = this.map;
    var center = new window.google.maps.LatLng(37.268108, -122.019447);
    map = new window.google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 15,
    });

    /*
    function callBack(results, status) {
      if (status == window.google.maps.places.PlacesService.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }

    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new window.google.maps.marker({
        map: window.map,
        position: place.geometry.location,
      });
    } */

    var place = new window.google.maps.LatLng(37.252041, -121.947128);
    var place2 = new window.google.maps.LatLng(37.26237, -121.96972);

    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h2 id="firstHeading" class="firstHeading">Good Samaritan Hospital</h2>' +
      '<div id="bodyContent">' +
      "<p><b>2425 Samaritan Dr, San Jose, CA 95124</b><p/>";
    const infowindow = new window.google.maps.InfoWindow({
      content: contentString,
    });
    const marker = new window.google.maps.Marker({
      position: place,
      map,
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

    const contentString2 =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h2 id="firstHeading" class="firstHeading">El Camino Hospital Los Gatos</h2>' +
      '<div id="bodyContent">' +
      "<p><b>815 Pollard Rd Los Gatos, CA 95032</b><p/>";
    const infowindow2 = new window.google.maps.InfoWindow({
      content: contentString2,
    });
    const marker2 = new window.google.maps.Marker({
      position: place2,
      map,
    });
    marker2.addListener("click", () => {
      infowindow2.open(map, marker2);
    });
  },
};
</script>

<style scoped>
#map {
  margin-top: 9%;
  margin-left: 17%;
  height: 600px;
  width: 1000px;
  background: gray;
}
</style> 