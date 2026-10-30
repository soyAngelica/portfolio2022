import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { FiX } from "react-icons/fi";
import FacefitQuote from "./FacefitQuote";

// Open with soyangelica.com/?quote=facefit
const QUOTE_PARAM = "facefit";
const STORAGE_KEY = "quote-facefit-seen";
// Lowercased, accent-free fragments that unlock the quote.
const NAME_KEYS = ["dani", "toro", "mattozzi", "matozzi"];

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();

const readSeen = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

const markSeen = () => {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* storage unavailable: the button just won't persist */
  }
};

const Modal = ({
  onClose,
  children,
  wide = false,
}: {
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full ${
          wide ? "max-w-4xl" : "max-w-md"
        } max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 md:p-10 shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 border-0 bg-transparent text-zinc-500 hover:text-teal"
        >
          <FiX size={22} />
        </button>
        {children}
      </div>
    </div>
  );
};

const QuoteGate = () => {
  const [open, setOpen] = useState(false);
  const [asking, setAsking] = useState(false);
  const [seen, setSeen] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fromLink =
      new URLSearchParams(window.location.search).get("quote") === QUOTE_PARAM;
    if (fromLink) {
      markSeen();
      setOpen(true);
    }
    setSeen(fromLink || readSeen());
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const n = normalize(name);
    if (n && NAME_KEYS.some((k) => n.includes(k))) {
      setAsking(false);
      setError(false);
      setName("");
      setOpen(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {seen && !open && !asking && (
        <button
          type="button"
          onClick={() => setAsking(true)}
          className="fixed bottom-6 right-6 z-40 rounded-full bg-teal px-5 py-3 text-white font-semibold shadow-lg hover:opacity-90"
        >
          View my quote
        </button>
      )}

      {asking && (
        <Modal onClose={() => setAsking(false)}>
          <form onSubmit={submit} className="text-left">
            <p className="text-2xl text-teal mb-2">Your quote</p>
            <p className="mb-4">What's your name?</p>
            <input
              autoFocus
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError(false);
              }}
              className="w-full rounded-lg border border-zinc-300 px-4 py-2 mb-3 focus:outline-none focus:border-teal"
              placeholder="Name"
            />
            {error && (
              <p className="text-sm text-red-600 mb-3">
                Hmm, I couldn't find a quote with that name.
              </p>
            )}
            <button
              type="submit"
              className="rounded-full bg-teal px-5 py-2 text-white font-semibold hover:opacity-90"
            >
              Open
            </button>
          </form>
        </Modal>
      )}

      {open && (
        <Modal wide onClose={() => setOpen(false)}>
          <FacefitQuote />
        </Modal>
      )}
    </>
  );
};

export default QuoteGate;
