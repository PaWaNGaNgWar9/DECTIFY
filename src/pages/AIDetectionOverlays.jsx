function AIDetectionOverlays({ darkMode }) {
  return (
    <div className="p-6">
      <h2 className="mb-6 text-2xl font-bold text-cyan-400">
        AI Detection Overlays
      </h2>

      <div
        className={`relative mx-auto overflow-hidden rounded-xl border h-[600px] max-w-5xl
        ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-slate-300"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center text-slate-500">
          LIVE CAMERA FEED
        </div>
        <div className="absolute border-2 border-green-400 top-20 left-20 w-28 h-36 animate-pulse">
          <div className="px-2 py-1 text-xs font-semibold text-black bg-green-400">
            PERSON • 98%
          </div>
        </div>
        <div className="absolute h-24 border-2 border-blue-400 bottom-24 left-52 w-44">
          <div className="px-2 py-1 text-xs font-semibold text-black bg-blue-400">
            VEHICLE • 94%
          </div>
        </div>
        <div className="absolute w-24 h-24 border-2 border-yellow-400 top-24 right-32">
          <div className="px-2 py-1 text-xs font-semibold text-black bg-yellow-400">
            FACE MATCH • 99%
          </div>
        </div>
        <div className="absolute w-56 border-2 border-red-500 border-dashed h-36 bottom-20 right-20">
          <div className="px-2 py-1 text-xs font-semibold text-white bg-red-500">
            RESTRICTED AREA
          </div>
        </div>
        <svg className="absolute inset-0 w-full h-full">
          <path
            d="M120 150 C220 200, 300 250, 380 320"
            stroke="#22c54e"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8"
          />
        </svg>
        <div
          className={`absolute top-4 right-4 w-72 rounded-lg border p-4
          ${
            darkMode
              ? "bg-black/80 border-slate-700"
              : "bg-white/90 border-slate-300"
          }`}
        >
          <h3 className="mb-4 font-semibold text-cyan-400">
            AI Detection Summary
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>People Detected</span>
              <span className="font-semibold text-green-400">
                100
              </span>
            </div>

            <div className="flex justify-between">
              <span>Vehicles</span>
              <span className="font-semibold text-blue-400">
                20
              </span>
            </div>
            <div className="flex justify-between">
              <span>Face Matches</span>
              <span className="font-semibold text-yellow-400">
                70
              </span>
            </div>

            <div className="flex justify-between">
              <span>Zone Violations</span>
              <span className="font-semibold text-red-400">
                50
              </span>
            </div>

            <div className="pt-2 mt-3 border-t border-slate-600">
              <div className="flex justify-between">
                <span>AI Status</span>
                <span className="font-semibold text-green-400">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AIDetectionOverlays;