import { useEffect, useState } from "react";

// App screenshots live in src/assets/img/sofia/ (01.jpg, 02.jpg, ...),
// picked up automatically in file-name order.
const modules = import.meta.glob<string>(
  "../../assets/img/sofia/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const screens = Object.keys(modules)
  .sort()
  .map((key) => modules[key]);

// One caption per screenshot, same order as the files.
// The app is in Spanish, so each caption explains the screen in English.
const captions = [
  {
    label: "Home dashboard",
    text: "One home screen for everything: start a video consultation, search the medical network, or track reimbursements and payments.",
  },
  {
    label: "Insurance plans",
    text: "Plans for individuals, families, and companies, with a separate Sofía Business product for teams.",
  },
  {
    label: "Direct support",
    text: "No middlemen: members chat directly with Sofía's medical team and support agents, right inside the app.",
  },
  {
    label: "Plan details",
    text: "Members choose a yearly coverage of 1.5, 5, or 15 million pesos, check their active plan and usage, and pay no deductible.",
  },
  {
    label: "SofíaMed network",
    text: "A nationwide directory of doctors, hospitals, pharmacies, and labs, with the closest hospital and saved favorites.",
  },
  {
    label: "Preventive care",
    text: "A primary care doctor and lab tests to keep members healthy, not only to treat them when they get sick.",
  },
  {
    label: "Minor care",
    text: "Doctor visits, medicines, and unlimited video consultations for everyday health issues.",
  },
  {
    label: "Major care",
    text: "Emergencies and hospital stays are covered too, with a quick SOS access point for urgent moments.",
  },
  {
    label: "Trusted & regulated",
    text: "Sofía is a licensed Mexican health insurer, backed by the country's financial and health authorities (CNSF, Secretaría de Salud, CONDUSEF).",
  },
];

const INTERVAL_MS = 4000;

const SofiaSlider = ({ href }: { href?: string }) => {
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
      className="relative aspect-[4/3] w-full rounded-md shadow-lg overflow-hidden flex items-center gap-4 md:gap-6 px-4 md:px-8"
      style={{
        background:
          "linear-gradient(135deg, #f7f4ff 0%, #ece6ff 55%, #e2ebff 100%)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* phone frame (left) */}
      <div className="relative h-[78%] aspect-[471/1024] shrink-0 rounded-[1.4rem] bg-zinc-900 p-[5px] shadow-xl">
        <div className="relative h-full w-full overflow-hidden rounded-[1.1rem] bg-white">
          {screens.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={captions[i]?.label ?? `Sofía app screen ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* caption (right) */}
      <div className="relative flex-1 self-stretch">
        {captions.slice(0, screens.length).map((c, i) => (
          <div
            key={c.label}
            aria-hidden={i !== index}
            className={`absolute inset-0 flex flex-col justify-center text-left transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-[#7a5ae0] mb-2">
              {c.label}
            </p>
            <p className="text-sm md:text-lg lg:text-xl leading-snug font-semibold text-[#2d1f5e]">
              {c.text}
            </p>
          </div>
        ))}
      </div>

      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Sofía project page"
          className="absolute inset-0 z-10"
        />
      )}

      {screens.length > 1 && (
        <div className="absolute z-20 bottom-3 right-4 md:right-8 flex gap-1.5">
          {screens.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show screen ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-[#7a5ae0]" : "w-1.5 bg-[#7a5ae0]/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SofiaSlider;
