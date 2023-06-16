import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, LayersControl, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getManholes, getPipes, getCollectorPoints, getDischargePoints } from '../../services/api';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import '../../components/AppDesign/style.css';

const MapComponent = () => {
  const [manholes, setManholes] = useState([]);
  const [pipes, setPipes] = useState([]);
  const [collectorPoints, setCollectorPoints] = useState([]);
  const [dischargePoints, setDischargePoints] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch manholes
    getManholes()
      .then((data) => {
        console.log(data); // Add this line to check the data format
        setManholes(data);
      })
      .catch((error) => {
        console.error('Error fetching manholes:', error);
        // Customize the error handling
        setError('Failed to fetch manholes. Please try again later.');
      });

    // Fetch pipes
    getPipes()
      .then((data) => {
        console.log(data); // Add this line to check the data format
        setPipes(data);
      })
      .catch((error) => {
        console.error('Error fetching pipes:', error);
        // Customize the error handling
        setError('Failed to fetch pipes. Please try again later.');
      });

    // Fetch collector points
    getCollectorPoints()
      .then((data) => {
        console.log(data); // Add this line to check the data format
        setCollectorPoints(data);
      })
      .catch((error) => {
        console.error('Error fetching collector points:', error);
        // Customize the error handling
        setError('Failed to fetch collector points. Please try again later.');
      });

    // Fetch discharge points
    getDischargePoints()
      .then((data) => {
        console.log(data); // Add this line to check the data format
        setDischargePoints(data);
      })
      .catch((error) => {
        console.error('Error fetching discharge points:', error);
        // Customize the error handling
        setError('Failed to fetch discharge points. Please try again later.');
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container-fluid p-0 map-container" style={{ height: '100vh' }}>
      {/* Component JSX */}
      <MapContainer center={[42.6629, 21.1655]} zoom={12} style={{ height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Manholes">
            <LayerGroup>
              {manholes.map((manhole) => (
                <Marker key={manhole.id} position={[manhole.lat, manhole.lng]} />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Pipes">
            <LayerGroup>
              {pipes.map((pipe) => (
                <Polyline key={pipe.id} positions={pipe.coordinates} />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Collector Points">
            <LayerGroup>
              {collectorPoints.map((collectorPoint) => (
                <Marker key={collectorPoint.id} position={[collectorPoint.lat, collectorPoint.lng]} />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Discharge Points">
            <LayerGroup>
              {dischargePoints.map((dischargePoint) => (
                <Marker key={dischargePoint.id} position={[dischargePoint.lat, dischargePoint.lng]} />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
