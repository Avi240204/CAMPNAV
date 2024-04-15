markerData.forEach(data => {
    // Create marker
    const marker = new mapboxgl.Marker()
      .setLngLat(data.coordinates)
      .addTo(map);
  
    // Create title
    const markerTitle = document.createElement('div');
    markerTitle.className = 'marker-title';
    markerTitle.textContent = data.title;
    document.getElementById('map').appendChild(markerTitle);
  
    // Update title position on map movement
    function updateTitlePosition() {
      const markerElement = marker.getElement();
      const markerRect = markerElement.getBoundingClientRect();
      const mapContainer = map.getContainer().getBoundingClientRect();
      const markerTitleWidth = markerTitle.getBoundingClientRect().width;
      markerTitle.style.left = `${markerRect.left - mapContainer.left + markerRect.width / 2 - markerTitleWidth / 2}px`;
      markerTitle.style.top = `${markerRect.top - mapContainer.top}px`;
    }
  
    updateTitlePosition();
  
    map.on('move', updateTitlePosition);
    map.on('zoom', updateTitlePosition);
  });
  