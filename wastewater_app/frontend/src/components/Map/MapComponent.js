import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getManholes, getPipes, getCollectorPoints, getDischargePoints } from '../../services/api';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import '../../components/AppDesign/MapDesignComponent.css';

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
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-lg-3">
          <div className="card">
            <h4 className="card-header">Sidebar</h4>
            <div className="card-body">
              <ul className="list-group">
                {/* ... your sidebar content here ... */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <h1 className="mt-4">Map Component</h1>
          <div className="card">
            <h4 className="card-header">Map</h4>
            <div className="card-body">
              <div id="custom-map-design">
                <MapContainer center={[42.6615, 21.1619]} zoom={14} style={{ height: '100vh', width: '100%' }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                  {/* Render manhole markers */}
                  {manholes.map((manhole) => (
                    <Marker key={manhole.id} position={[manhole.lat, manhole.lng]}>
                      <Popup>
                        <strong>Manhole Code:</strong> {manhole.code}
                        <br />
                        <strong>Depth:</strong> {manhole.depth}
                        <br />
                        <strong>Material:</strong> {manhole.material}
                        <br />
                        <strong>Installation Date:</strong> {manhole.installation_date}
                        <br />
                        {/* ... */}
                      </Popup>
                    </Marker>
                  ))}

                  {/* Render pipe polylines */}
                  {pipes.map((pipe) => (
                    <Polyline
                      key={pipe.id}
                      positions={pipe.coordinates.map((coordinate) => [coordinate.lat, coordinate.lng])}
                      color="blue"
                    />
                  ))}

                  {/* Render collector point markers */}
                  {collectorPoints.map((collectorPoint) => (
                    <Marker key={collectorPoint.id} position={[collectorPoint.lat, collectorPoint.lng]}>
                      <Popup>
                        <strong>Collector Point Name:</strong> {collectorPoint.name}
                        <br />
                        <strong>Capacity:</strong> {collectorPoint.capacity}
                        <br />
                        {/* ... */}
                      </Popup>
                    </Marker>
                  ))}

                  {/* Render discharge point markers */}
                  {dischargePoints.map((dischargePoint) => (
                    <Marker key={dischargePoint.id} position={[dischargePoint.lat, dischargePoint.lng]}>
                      <Popup>
                        <strong>Discharge Point Name:</strong> {dischargePoint.name}
                        <br />
                        <strong>Max Flow Rate:</strong> {dischargePoint.max_flow_rate}
                        <br />
                        {/* ... */}
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
