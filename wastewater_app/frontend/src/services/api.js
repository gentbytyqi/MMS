// api.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

// Function to handle API errors
const handleApiError = (error) => {
  console.error('API Error:', error);
  throw error;
};

// Function to fetch manholes from the backend
export const getManholes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}manholes/`);
    return response.data.map((manhole) => {
      return {
        ...manhole,
        lat: manhole.location.coordinates[0],
        lng: manhole.location.coordinates[1],
      };
    });
  } catch (error) {
    handleApiError(error);
  }
};

// Function to fetch pipes from the backend
export const getPipes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}pipes/`);
    return response.data.map((pipe) => {
      return {
        ...pipe,
        coordinates: pipe.location.coordinates.map((coordinate) => {
          return { lat: coordinate[0], lng: coordinate[1] };
        }),
      };
    });
  } catch (error) {
    handleApiError(error);
  }
};

// Function to fetch collector points from the backend
export const getCollectorPoints = async () => {
  try {
    const response = await axios.get(`${BASE_URL}collector-points/`);
    return response.data.map((collectorPoint) => {
      return {
        ...collectorPoint,
        lat: collectorPoint.location.coordinates[0],
        lng: collectorPoint.location.coordinates[1],
      };
    });
  } catch (error) {
    handleApiError(error);
  }
};

// Function to fetch discharge points from the backend
export const getDischargePoints = async () => {
  try {
    const response = await axios.get(`${BASE_URL}discharge-points/`);
    return response.data.map((dischargePoint) => {
      return {
        ...dischargePoint,
        lat: dischargePoint.location.coordinates[0],
        lng: dischargePoint.location.coordinates[1],
      };
    });
  } catch (error) {
    handleApiError(error);
  }
};
