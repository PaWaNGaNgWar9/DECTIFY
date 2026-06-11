import { useEffect, useState } from "react";
import Header from "./components/Header";
import AlertsPanel from "./components/AlertsPanel";
import MultiCameraGrid from "./pages/MultiCameraGrid";
import AIDetectionOverlays from "./pages/AIDetectionOverlays";
const severityLevels = ["Critical", "High", "Medium"];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "Intrusion Detected",
      severity: "Critical",
      acknowledged: false,
    },
  ]);

  useEffect(() => {
    const alertGenerator = setInterval(() => {
      const newAlert = {
        id: Date.now(),
        type: "Face Match Found",
        severity:
          severityLevels[
            Math.floor(
              Math.random() * severityLevels.length
            )
          ],
        acknowledged: false,
      };

      setAlerts((prevAlerts) => [
        newAlert,
        ...prevAlerts,
      ]);
    }, 5000);

    return () => clearInterval(alertGenerator);
  }, []);

  const handleAlertAcknowledgement = (
    alertId
  ) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === alertId
          ? {
              ...alert,
              acknowledged: true,
            }
          : alert
      )
    );
  };

  const activeAlertCount = alerts.filter(
    (alert) => !alert.acknowledged
  ).length;

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <Header
        activeAlertCount={activeAlertCount}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="grid lg:grid-cols-[1fr_350px]">
        <MultiCameraGrid 

        darkMode={darkMode} />

        <AlertsPanel
          alerts={alerts}
          darkMode={darkMode}
          handleAlertAcknowledgement={
            handleAlertAcknowledgement
          }
        />
        <AIDetectionOverlays darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;