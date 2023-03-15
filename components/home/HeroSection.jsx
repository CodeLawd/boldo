import Link from "next/link";
import { motion } from "framer-motion";
import { NavBar, SlideDown } from "..";

const HeroSection = () => {
  return (
    <section className="bg-primary">
      <NavBar />
      <img src="/ellipse.svg" alt="" className="absolute top-0 right-0" />
      <main className="relative mx-auto flex min-h-[80vh] max-w-[85%] items-center gap-6 pt-28 md:min-h-[85vh] md:py-56  md:pb-20 lg:max-w-[80%]">
        <div className="">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 pt-14 text-center font-bold  text-primary md:space-y-1.5 md:pt-0 md:text-left">
              <h1 className="text-3xl font-light  leading-10  text-white  md:text-4xl xl:text-5xl 2xl:leading-[1.2]">
                Save time by building <br /> fast with Boldo Template
              </h1>
              <p className="py-5 font-light leading-8 text-[#F1F1F1]">
                Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator
                success deployment non-disclosure.
              </p>

              <div className="flex flex-col items-center gap-5 md:flex-row">
                <Link
                  href="/#"
                  className="btn-secondary btn-block btn flex gap-10 rounded-3xl font-bold normal-case text-black md:btn-wide">
                  Buy template
                </Link>
                <Link
                  href="/#"
                  className="btn-outline btn-block btn flex gap-10 rounded-3xl font-bold normal-case md:btn-wide">
                  Explore
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4 }}
              className="relative z-10 flex flex-1 pb-20 md:justify-end md:pb-0">
              <img src="/hero.svg" alt="hero image" className="" />
            </motion.div>
          </div>

          <SlideDown>
            <div className="mt-10 hidden md:flex">
              <img src="/clients.svg" alt="clients" />
            </div>
          </SlideDown>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
