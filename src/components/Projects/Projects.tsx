import SofiaSlider from "./SofiaSlider";
import MeltwaterSlider from "./MeltwaterSlider";

const storeBtn =
  "inline-block rounded-full border-2 border-teal px-5 py-1.5 text-teal font-semibold hover:bg-teal hover:text-white transition-colors";

const Projects = () => {
  return (
    <div className="pt-16">
      <h2 className="text-left text-2xl font-bold md:font-normal md:text-3xl text-teal">
        Featured Work
      </h2>
      <div className="md:flex md:space-x-10 lg:space-x-24 mt-10 w-[80%] md:w-full">
        <div className="relative mb-14 md:mb-0 md:w-2/4">
          <MeltwaterSlider href="https://www.meltwater.com/en/product-tours" />
          <div className="pt-6 pb-4">
            <a
              href="https://www.meltwater.com/en/product-tours"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-slate-400 hover:text-teal"
            >
              Meltwater • (SaaS platform)
            </a>
            <p className="text-lg">
              Media, social, and influencer intelligence platform used by PR
              and marketing teams worldwide. I built features for the
              Newsletters builder, which turns media coverage into branded
              email digests, and for the influencer marketing tools that teams
              use to discover, contact, and track creators.
            </p>
            <p className="text-sm text-zinc-500 mt-2">
              Screenshots from Meltwater's public product tours. All rights
              belong to Meltwater.
            </p>
          </div>
        </div>

        <div className="relative mb-14 md:mb-0 md:w-2/4">
          <SofiaSlider href="https://mwm.ai/apps/sofia/1463424996" />
          <div className="pt-6 pb-4">
            <a
              href="https://mwm.ai/apps/sofia/1463424996"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-slate-400 hover:text-teal"
            >
              Sofía • (Mobile app)
            </a>
            <p className="text-lg">
              Digital health insurance app for Mexico: members manage their
              plan, coverage, video consultations, and reimbursements right
              from their phone. I collaborated on this app as part of the
              Sofía Salud team.
            </p>
            <p className="text-sm text-zinc-500 mt-2">
              Screenshots from the official App Store listing. All rights
              belong to Sofía Salud.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://apps.apple.com/us/app/sof%C3%ADa/id1463424996"
                target="_blank"
                rel="noopener noreferrer"
                className={storeBtn}
              >
                iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sofiasalud.app"
                target="_blank"
                rel="noopener noreferrer"
                className={storeBtn}
              >
                Android
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
