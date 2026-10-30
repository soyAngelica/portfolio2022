const RATE = 26;

const phases = [
  {
    n: "1",
    title: "Audience research & moving off Shopify",
    hours: 30,
    time: "1–2 weeks",
    text: "Before building anything big, we listen to your community, and we move your site off Shopify so you stop paying the monthly fee.",
    items: [
      "Short quiz for your Instagram followers, made to open from stories",
      "In exchange for their email: a free workout, a launch discount on your book or a raffle of free 1:1 sessions (we'll pick it together)",
      "Every answer saved in a records database, split into professionals and individuals, showing who is interested in working with you",
      "We learn what people need, what hurts most and what they would pay, so we can build a sharper, better-targeted product",
      "myfacefit.com moved off Shopify and connected to Claude, so you can update texts, pages and offers just by asking, without code and without waiting on anyone",
    ],
    note: "Everything after this phase is built on what we learn here: a product shaped for each audience, instead of guessing.",
  },
  {
    n: "2",
    title: "Mobile-first web app: courses, memberships & specialist network",
    hours: 190,
    time: "6–8 weeks",
    text: "One place for your courses and your specialist directory. It is built for the web, but designed for people who live on their phones: it opens from Instagram, works like an app and can be saved to the home screen.",
    items: [
      "My Facefit for individuals and Facefit Pro (ProHealth and ProBeauty) for professionals",
      "Monthly or yearly memberships, plus a clinic license so dentists can give access to their patients",
      "Member area with progress, videos and certificates",
      "Specialist network: Facefit Pro graduates can be listed, paid or in exchange for recommending you with a discount code",
      "Calendly integration to book and pay your 1:1 sessions",
      "Claude connected to all your tools, so you can send emails, create campaigns, set up discounts and plan your classes just by asking",
    ],
    note: "This is how we start earning from the audience you already have while the app is being built. Every lesson and routine you create here is the same content we adapt for the app, so nothing is done twice.",
  },
  {
    n: "3",
    title: "The Facefit app",
    hours: 500,
    time: "3–4 months",
    text: "Your routines with the camera on and a live on-screen guide that shows where to place your hands, for iOS and Android.",
    items: [
      "Real-time face and hand guide",
      "Daily routines, streaks and achievements so people come back every day",
      "Same account, courses and content as the web app",
      "Launches to an audience that already knows and pays for Facefit",
    ],
  },
];

const money = (n: number) => `USD ${n.toLocaleString("en-US")}`;

const FacefitQuote = () => {
  const total = phases.reduce((sum, p) => sum + p.hours * RATE, 0);

  return (
    <div className="text-left">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal mb-2">
        Quote · Facefit
      </p>
      <h2 className="text-3xl md:text-4xl text-teal mb-3">
        A plan for Facefit, step by step
      </h2>
      <p className="text-lg mb-8 md:w-4/5">
        Three phases. Each one is delivered and paid separately, so every step
        works and brings something back before we take the next one.
      </p>

      <div className="space-y-6">
        {phases.map((p) => (
          <div
            key={p.n}
            className="md:flex gap-8 rounded-2xl border border-zinc-200 p-6 md:p-8"
          >
            <div className="md:w-1/3 mb-4 md:mb-0">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
                Phase {p.n}
              </p>
              <p className="text-2xl mt-1 mb-3">{p.title}</p>
              <p className="text-zinc-500">
                {p.time} · ~{p.hours} h
              </p>
              <p className="text-xl font-semibold text-teal mt-1">
                {money(p.hours * RATE)}
              </p>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-3">{p.text}</p>
              <ul className="list-disc pl-5 space-y-1">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              {p.note && (
                <p className="mt-4 rounded-xl bg-[#f3f7f6] px-4 py-3">
                  {p.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-[#e2ebff] px-6 py-5 md:flex justify-between items-center gap-6">
        <p className="text-lg">
          Total for all three phases:{" "}
          <span className="font-semibold">{money(total)}</span>
        </p>
        <p className="text-zinc-600 mt-2 md:mt-0">
          Optional maintenance after launch: USD 200–400 per month
        </p>
      </div>

      <div className="mt-10">
        <a
          href="mailto:soyangelica.aguilar@gmail.com?subject=Facefit%20quote"
          className="inline-block rounded-full bg-teal px-6 py-3 text-white font-semibold hover:opacity-90"
        >
          Let's talk
        </a>
        <p className="mt-6 text-lg">
          Talk soon,
          <br />
          Angélica
        </p>
      </div>
    </div>
  );
};

export default FacefitQuote;
