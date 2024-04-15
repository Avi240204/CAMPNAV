mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyZGlra2FuZ2FzaXlhIiwiYSI6ImNsdWM3bmJrbTExa2MybG1tcHducDF3ODIifQ.3b3_aDy-R33zlGUEszQeHA';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [72.9191415,22.5190604], // starting position
  zoom: 15
});
