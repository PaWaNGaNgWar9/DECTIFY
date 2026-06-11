import { useEffect, useState } from "react";

function Header({
  activeAlertCount,
  darkMode,
  setDarkMode,
}) {
  const [currentTime, setCurrentTime] =
    useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const totalCameras = 14;
  const onlineCameras = 12;
  const peopleDetected = 34;

  return (
    <header
      className={`flex items-center justify-between h-24 px-6 border-b ${
        darkMode
          ? "bg-slate-950 border-slate-700"
          : "bg-white border-slate-300"
      }`}
    >
      <div>
        <h1 className="text-2xl font-bold text-cyan-400">
          DECTIFY SOC
        </h1>

        <p className="text-xs text-slate-400">
          AI Surveillance Operations Centre
        </p>
      </div>
      <div className="flex gap-8">
        <div>
          <p className="text-xs text-slate-400">
            Cameras
          </p>

          <p className="font-semibold">
            {onlineCameras}/{totalCameras}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">
            People
          </p>

          <p className="font-semibold">
            {peopleDetected}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">
            Alerts
          </p>

          <p className="font-semibold text-red-500">
            {activeAlertCount}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-400">
            Threat Level
          </p>

          <p className="font-semibold text-red-500">
            HIGH
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-400">
            System Health
          </p>

          <p className="font-semibold text-green-400">
            HEALTHY
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="text-right">
          <p className="text-sm">
            {currentTime.toLocaleDateString()}
          </p>

          <p className="font-mono text-cyan-400">
            {currentTime.toLocaleTimeString()}
          </p>
        </div>
        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className="px-4 py-2 text-sm font-medium transition rounded-lg bg-cyan-600 hover:bg-cyan-700"
        >
          {darkMode
            ? "☀ Normal Mode"
            : "🌙 Night Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;