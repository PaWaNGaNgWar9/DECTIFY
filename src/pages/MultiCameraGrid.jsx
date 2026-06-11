import { useState } from "react";
import CameraCard from "../components/CameraCard";
import cameraLocations from "../data/cameras";

function MultiCameraGrid({ darkMode }) {
  const [selectedCamera, setSelectedCamera] =
    useState(null);
  return (
    <section className="grid gap-4 p-4 md:grid-cols-3">
      {cameraLocations.map((location, index) => (
        <CameraCard
          key={index}
          location={location}
          index={index}
          darkMode={darkMode}
          selectedCamera={selectedCamera}
          setSelectedCamera={setSelectedCamera}
        />
      ))}
    </section>
  );
}

export default MultiCameraGrid;