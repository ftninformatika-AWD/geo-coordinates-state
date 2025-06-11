import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {

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

    return <div>Hello user! Your position is at longitude: {coords.longitude} and latitude: {coords.latitude}</div>

}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App/>,
);