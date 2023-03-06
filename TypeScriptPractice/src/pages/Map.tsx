import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import React, { useEffect, useMemo, useState } from 'react';

interface LatLng {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: '1000px',
  height: '900px',
};
const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: [
    { lat: 37.772, lng: 126.214 },
    { lat: 37.772, lng: 130.214 },
    { lat: 37.772, lng: 134.214 },
    { lat: 37.772, lng: 138.214 },
  ],
  zIndex: 1,
};

const Map: React.FC = () => {
  const [path, setPath] = useState<LatLng[]>([
    { lat: 37.565643683342, lng: 126.95524147826 },
    { lat: 37.665643683342, lng: 126.85524147826 },
    { lat: 37.465643683342, lng: 126.75524147826 },
    { lat: 37.365643683342, lng: 126.99524147826 },
  ]);
  const handleMarkerDragEnd = (index: number, event: google.maps.MapMouseEvent) => {
    const latLng = event.latLng.toJSON();
    const newPath = [...path];
    newPath[index] = { lat: latLng.lat, lng: latLng.lng };
    setPath(newPath);
  };
  const center = useMemo(() => ({ lat: 37.565643683342, lng: 126.95524147826 }), []);

  return (
    <div className="flex">
      <LoadScript googleMapsApiKey="AIzaSyDZ4QOEeNhuRFxKXgBnvifgL8Qn_v7ZHBs">
        <GoogleMap zoom={18} center={center} mapContainerStyle={containerStyle}>
          {path.map((coordinates, index) => (
            <Marker
              key={index}
              position={coordinates}
              draggable={true}
              onDragEnd={(event) => handleMarkerDragEnd(index, event)}
              label={`${index + 1}`}
            ></Marker>
          ))}
          <Polyline path={path} options={options} />
        </GoogleMap>
      </LoadScript>
      <div className="space-y-5">
        <div>
          path0
          <br />
          lat : {path[0].lat}, lng : {path[0].lng}
        </div>
        <div>
          path1
          <br />
          lat : {path[1].lat}, lng : {path[1].lng}
        </div>
        <div>
          path2
          <br />
          lat : {path[2].lat}, lng : {path[2].lng}
        </div>
        <div>
          path3
          <br />
          lat : {path[3].lat}, lng : {path[3].lng}
        </div>
      </div>
    </div>
  );
};

// export default Map;

// const Map: React.FC<MapProps> = ({ center, zoom }) => {
//   const center2 = useMemo(() => ({ lat: 12.345, lng: 678.91 }), []);
//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <LoadScript googleMapsApiKey={`AIzaSyDZ4QOEeNhuRFxKXgBnvifgL8Qn_v7ZHBs`}>
//         <GoogleMap zoom={zoom} center={center} mapContainerClassName="map-container">
//           <MarkerF position={center2} />
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

export default Map;
