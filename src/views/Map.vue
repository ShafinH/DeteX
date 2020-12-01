<template>
  <div id="map" ref="map"></div>
</template>
    
<script>
export default {
  data: () => ({
    map: null,
    request: {},
  }),
/*
  mounted() {
    var map = this.map;
    var center = new window.google.maps.LatLng(37.268108, -122.019447);
    map = new window.google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 15,
    });

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
    }
  }, */
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