import { useState } from "react";
import { testimonialData } from "../../helpers/data";
import { FadeIn, SlideUp } from "..";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const showItems = testimonialData.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 3 >= testimonialData.length ? 0 : prevIndex + 3));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 3 : prevIndex - 3));
  };

  return (
    <div className="section-padding bg-primary text-white md:mb-40">
      <div className="bg-container">
        <SlideUp>
          <div className="mb-10 flex flex-col justify-between gap-20 md:mb-16 md:flex-row md:items-end">
            <h2 className=" text-4xl leading-10 text-white">
              An enterprise template to ramp <br /> up your company website
            </h2>
            {/* indicator */}
            <div className="flex justify-center gap-5">
              <ArrowLeftCircleIcon className="w-10 cursor-pointer text-white" onClick={handlePrev} />
              <ArrowRightCircleIcon className="w-10 cursor-pointer text-white" onClick={handleNext} />
            </div>
          </div>
        </SlideUp>

        <FadeIn>
          <div className="mx-auto flex items-start gap-8 overflow-hidden">
            {showItems?.map(({ image, body, name, position }, id) => (
              <div key={id} className="flex-1 rounded-lg bg-white p-8 transition-all duration-700">
                <h2 className="text-lg text-primary md:text-3xl">{body}</h2>

                <div className="mt-10 flex items-center gap-5">
                  <img src={image} alt="" />
                  <p className="flex flex-col text-primary">
                    <span className="font-bold">{name}</span>
                    <span>{position}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Testimonials;
