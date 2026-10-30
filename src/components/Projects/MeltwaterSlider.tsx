import { useEffect, useState } from "react";

// Product screens live in src/assets/img/meltwater/ (01.png, 02.png, ...),
// picked up automatically in file-name order.
const modules = import.meta.glob<string>(
  "../../assets/img/meltwater/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const screens = Object.keys(modules)
  .sort()
  .map((key) => modules[key]);

// One short title per screen, same order as the files.
const titles = [
  "Newsletter builder · pick a template",
  "Social analytics dashboard",
  "AI visibility tracking",
  "AI search assistant & spike detection",
  "Influencer profile & audience insights",
  "AI assistant for PR teams",
  "Influencer discovery",
  "Influencer campaign analytics",
  "AI response accuracy check",
  "Media coverage dashboard",
  "Media relations & outreach",
  "Brand trends across AI answers",
];

const INTERVAL_MS = 3500;

const MeltwaterSlider = ({ href }: { href?: string }) => {
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
      className="relative aspect-[4/3] w-full rounded-md shadow-lg overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 18% 22%, #f2fbfa 0%, transparent 55%), radial-gradient(circle at 85% 80%, #b9e2dd 0%, transparent 60%), #d8efec",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {screens.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== index}
          className={`absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 pb-8 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={titles[i] ?? `Meltwater screen ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            className="w-[82%] max-h-[68%] object-contain drop-shadow-xl"
          />
          <p className="text-sm md:text-lg font-semibold text-[#1f5753] text-center">
            {titles[i]}
          </p>
        </div>
      ))}

      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Meltwater project page"
          className="absolute inset-0 z-10"
        />
      )}

      {screens.length > 1 && (
        <div className="absolute z-20 bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {screens.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show screen ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all ${
                i === index ? "w-4 bg-[#2a9d94]" : "w-1 bg-[#2a9d94]/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MeltwaterSlider;
