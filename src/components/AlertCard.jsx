function AlertCard({
  alert,
  handleAlertAcknowledgement,
}) {
  return (
    <div
      className={`
        border
        border-slate-700
        rounded-lg
        p-3
        mb-3
        ${
          alert.acknowledged
            ? "opacity-40"
            : "opacity-100"
        }
      `}
    >
      <div className="font-semibold text-red-400">
        {alert.severity}
      </div>

      <div className="mt-1 text-sm">
        {alert.type}
      </div>

      <button
        onClick={() =>
          handleAlertAcknowledgement(alert.id)
        }
        className="px-3 py-1 mt-3 text-sm rounded bg-cyan-600 hover:bg-cyan-700"
      >
        Acknowledge
      </button>
    </div>
  );
}

export default AlertCard;