"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
  });
  const center = useMemo(() => ({ lat: 13.739415037890979, lng: 100.52758009002648 }), []);

  return (
    <div className="w-screen h-screen">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={center}
          zoom={18}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        />
      )}
    </div>
  );
};

export default Map;
