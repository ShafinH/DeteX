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
  this.initMap();

  },

  methods: {
    initMap() { 
        var center = new window.google.maps.LatLng(37.268108, -122.019447);
    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 15,
    });
    }

  }
  
}; 
</script>

<style scoped>
#map {
  margin-top: 3%;
  margin-left: 17%;
  height: 600px;
  width: 1000px;
  background: gray;
}
</style> 