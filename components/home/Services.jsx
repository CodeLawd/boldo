import { ourServices } from "@/helpers/data";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { SlideUp, Title } from "..";

const item = [
  "We connect our customers with the best.",
  "Advisor success customer launch party.",
  "Business-to-consumer long tail.",
];

const Services = () => {
  return (
    <div className="bg-container section-padding text-center" id="services">
      <SlideUp>
        <div className="mb-10 flex flex-col items-center md:mb-16">
          <Title secondaryText="Our Services" primaryText="Handshake infographic mass market crowdfunding iteration." />
        </div>
      </SlideUp>

      <SlideUp>
        <div className="grid gap-10 text-left md:grid-cols-2 md:gap-36 lg:grid-cols-3">
          {ourServices?.map(({ image, title, desc }, id) => (
            <div key={id}>
              <img src={image} alt={title} className="w-full" />
              <p className="py-5 text-xl text-black">{title}</p>
              <p className="mb-8 font-extralight text-[#989898] md:max-w-[80%]">{desc}</p>
              <Link href="/#" className="group w-fit font-bold normal-case text-black">
                <div className="flex items-center gap-5 transition-all duration-200 group-hover:gap-8 group-hover:text-secondary">
                  <span className="">Explore page</span>
                  <ArrowRightIcon className="w-4" />
                </div>
                <div className="mt-2 h-[1.2px] w-[150px] bg-black transition-all duration-200 group-hover:bg-secondary" />
              </Link>
            </div>
          ))}
        </div>
      </SlideUp>

      <SlideUp>
        <div className="my-20 grid items-center md:mt-40 md:grid-cols-2 md:gap-20">
          <div>
            <img src="/s1.svg" alt="image" className="" />
          </div>
          <div className="text-left">
            <h2 className="max-w-[85%] text-2xl font-light text-black md:text-3xl md:leading-[3.5rem] lg:text-4xl">
              We connect our customers with the best, and help them keep up-and stay open.
            </h2>
            <div className="my-10">
              {item?.map((text, id) => (
                <p key={id} className="mb-3 flex gap-5 text-primary">
                  <CheckCircleIcon className="w-6" />
                  <span>{text}</span>
                </p>
              ))}
            </div>
            <Link
              href="/#"
              className="btn-primary btn-block btn flex gap-10 rounded-3xl font-bold normal-case md:btn-wide">
              Start Now
            </Link>
          </div>
        </div>
      </SlideUp>

      <SlideUp>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
          <div className="text-left">
            <h2 className="max-w-[85%] text-2xl font-light text-black md:text-3xl md:leading-[3.5rem] lg:text-4xl">
              We connect our customers with the best, and help them keep up-and stay open.
            </h2>
            <div className="my-10">
              {item?.map((text, id) => (
                <p
                  key={id}
                  className="mb-5 flex gap-5 rounded-md border-[0.3px] bg-white py-5 px-6 text-primary shadow-xl transition-all duration-150 hover:bg-primary hover:text-white md:max-w-[80%]">
                  <CheckCircleIcon className="w-6" />
                  <span>{text}</span>
                </p>
              ))}
            </div>
            <Link
              href="/#"
              className="btn-primary btn-block btn flex gap-10 rounded-3xl font-bold normal-case md:btn-wide">
              Start Now
            </Link>
          </div>

          <div className="flex justify-end">
            <img src="/s2.svg" alt="image" className="" />
          </div>
        </div>
      </SlideUp>
    </div>
  );
};

export default Services;
