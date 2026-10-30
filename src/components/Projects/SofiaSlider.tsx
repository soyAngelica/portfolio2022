import { useEffect, useState } from "react";

// Drop the app screenshots into src/assets/img/sofia/ (01.jpg, 02.jpg, ...).
// They are picked up automatically, in file-name order.
const modules = import.meta.glob<string>(
  "../../assets/img/sofia/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const screens = Object.keys(modules)
  .sort()
  .map((key) => modules[key]);

const INTERVAL_MS = 2800;

const SofiaSlider = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (paused || reduceMotion || screens.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % screens.length),
      INTERVAL_MS
    );
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative aspect-[4/3] w-full rounded-md shadow-lg overflow-hidden flex items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, #1c0630 0%, #3a1670 55%, #5b35c4 100%)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* phone frame */}
      <div className="relative h-[86%] aspect-[471/1024] rounded-[1.6rem] bg-zinc-900 p-[6px] shadow-2xl">
        <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-white">
          {screens.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Sofía app screen ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {screens.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {screens.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show screen ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SofiaSlider;
