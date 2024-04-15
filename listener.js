document.getElementById('Route-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting normally
  
    // get the selected source and destination
    const source = document.getElementById('source').value;
    const destination = document.getElementById('Destination').value;
  
    // convert the selected source and destination to coordinates
    const sourceCoordinates = markerData.find(data => data.title === source).coordinates;
    const destinationCoordinates = markerData.find(data => data.title === destination).coordinates;
  
    // call the getRoute function with the destination coordinates
    getRoute(destinationCoordinates);
  });
  