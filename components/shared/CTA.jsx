import Link from "next/link";
import { FadeIn, SlideUp } from "..";

const CTA = () => {
  return (
    <div className="bg-container section-padding-brief relative mb-20 flex flex-col items-center space-y-5 overflow-hidden rounded-xl bg-primary py-16">
      <SlideUp>
        <div className="relative z-10 flex w-full items-center justify-center">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-light text-white md:text-[2.6rem] md:leading-[3.5rem]">
              An enterprise template to ramp <br /> up your company website
            </h2>
          </div>
        </div>
      </SlideUp>

      <SlideUp duration={1} startY={60}>
        <div className="mt-3 flex flex-col gap-4 md:flex-row">
          <input
            placeholder="Your email address"
            className="input-bordered input-primary input w-full flex-1 rounded-full py-4 text-black focus:outline-1 focus:outline-offset-0 md:w-[400px]"
            type="text"
          />
          <Link href="/#" className="btn-secondary btn-wide btn rounded-full px-8 font-bold normal-case text-primary">
            Start now
          </Link>
        </div>
      </SlideUp>

      <FadeIn>
        <img src="/cta.svg" alt="max edge" className="absolute right-0 top-0" />
      </FadeIn>
    </div>
  );
};

export default CTA;
