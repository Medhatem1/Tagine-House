import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {LoadScript, GoogleMap} from '@react-google-maps/api'

const GoogleMapa = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749, // Replace with the desired latitude
    lng: -122.4194, // Replace with the desired longitude
  };
  return(
      <LoadScript googleMapsApiKey='https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyD8JrUcyitsIJANdkBxYe0W-zIoZGvE4ZA&parameters'>
          <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    ></GoogleMap>
      </LoadScript>
  )
}
 

export default GoogleMapa;







{/*{
  return(
      <LoadScript googleMapsApiKey='https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyD8JrUcyitsIJANdkBxYe0W-zIoZGvE4ZA&parameters'>
          <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    ></GoogleMap>
      </LoadScript>
  )
}*/}

