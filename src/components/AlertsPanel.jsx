import AlertCard from "./AlertCard";

function AlertsPanel({
  alerts,
  handleAlertAcknowledgement,
  darkMode,
}) {
  return (
    <aside
      className={`border-l p-4 h-[calc(100vh-96px)] overflow-y-auto
      ${
        darkMode
          ? "border-slate-700 bg-slate-950"
          : "border-slate-300 bg-white"
      }`}
    >
      <h2 className="mb-4 text-lg font-semibold">
        Active Alerts
      </h2>

      {alerts.map((alert) => (
        <AlertCard
          key={alert.id}
          alert={alert}
          handleAlertAcknowledgement={
            handleAlertAcknowledgement
          }
        />
      ))}
    </aside>
  );
}

export default AlertsPanel;