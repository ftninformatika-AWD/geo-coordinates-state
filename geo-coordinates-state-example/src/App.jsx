import React, { useState } from "react";

const App = () => {

  // Definisemo state 
  const [coords, setCoords] = useState({
    longitude: null,
    latitude: null
  })

  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      setCoords({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    },
    (error) => console.log(error)
  );

  return (
    <>
      <h1>Geo coordinates state example</h1>
      <p>Hello user! Your position is at longitude: {coords.longitude} and latitude: {coords.latitude}</p>
    </>
  )
};

export default App
