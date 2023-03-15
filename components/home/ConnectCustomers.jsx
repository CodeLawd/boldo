import { accordionItem } from "@/helpers/data";
import React from "react";
import { SlideUp } from "..";

const ConnectCustomers = () => {
  return (
    <div className="bg-container mb-20 md:mb-40" id="about">
      <SlideUp>
        <img src="/connect.png" alt="" className="w-full" />
      </SlideUp>
      <SlideUp>
        <div className="grid gap-10 py-10 md:grid-cols-2">
          <p className="text-2xl font-light leading-10 text-black md:max-w-[80%] md:text-4xl">
            We connect our customers with the best, and help them keep up-and stay open.
          </p>
          <div>
            {accordionItem?.map(({ title, content }, id) => (
              <details key={id} className="mb-3 cursor-pointer border-b border-[#777777] py-4 text-primary">
                <summary className="font-semibold">{title}</summary>
                <p className="pt-2 text-primary">{content}</p>
              </details>
            ))}
          </div>
        </div>
      </SlideUp>
    </div>
  );
};

export default ConnectCustomers;
