

mapboxgl.accessToken = 'pk.eyJ1IjoibXVkaXRhLTk2IiwiYSI6ImNrcGw0MmtycjAyMmQyb3J3ZG9pYWZiYmEifQ.kNg1U_RsoEuXrgIsfUFMig';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 9,
  center: [-71.157895, 42.707741]
});

async function getCoordinates()
{
  var lat=-71.157895;
  var long=42.707741;
  var place = document.getElementById('address').value
  console.log(place)
const res= await fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/'+place+'.json?access_token=pk.eyJ1IjoibXVkaXRhLTk2IiwiYSI6ImNrcGw0MmtycjAyMmQyb3J3ZG9pYWZiYmEifQ.kNg1U_RsoEuXrgIsfUFMig')
const data = await res.json();  
lat=data.features[0].geometry.coordinates[0] 
long= data.features[0].geometry.coordinates[1]
console.log(lat+" "+long)
  
fetch(`/api/foodtrucks/${lat}/${long}`)
window.open(`http://localhost:5000/api/foodtrucks/${lat}/${long}`)
 

}