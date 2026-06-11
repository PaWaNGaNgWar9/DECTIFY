function CameraCard({
  location,
  index,
  darkMode,
  selectedCamera,
  setSelectedCamera,
}) {
  return (
    <div
      onClick={() => setSelectedCamera(index)}
      className={`
      cursor-pointer
      border
      rounded-lg
      p-3
      transition-all
      duration-300
      hover:border-cyan-400
      ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-slate-300"
      }
      ${
        selectedCamera === index
          ? "ring-2 ring-cyan-400"
          : ""
      }
      `}
    >
      <div className="relative h-40 overflow-hidden rounded-md bg-slate-800">
        <div className="absolute w-20 h-20 border-2 border-green-400 top-10 left-10"></div>

        <div className="absolute px-2 py-1 text-xs font-semibold text-black bg-green-500 rounded top-3 left-3">
          PERSON • 98%
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold">
          CAM-0{index + 1}
        </h3>

        <p className="text-sm text-slate-400">
          {location}
        </p>

        <span className="text-xs font-medium text-red-400">
          ONLINE ● RECORDING
        </span>
      </div>
    </div>
  );
}

export default CameraCard;