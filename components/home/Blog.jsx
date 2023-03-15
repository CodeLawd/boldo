import { blog } from "@/helpers/data";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { SlideUp, Title } from "..";

const Blog = () => {
  return (
    <div className="bg-container mb-20 text-center md:mb-40">
      <SlideUp>
        <div className="mb-10 flex flex-col items-center md:mb-16">
          <Title secondaryText="Our Blog" primaryText="Value proposition accelerator product management venture." />
        </div>
      </SlideUp>

      <SlideUp>
        <div className="grid justify-center gap-10 text-left md:grid-cols-2 md:gap-20 lg:grid-cols-3">
          {blog?.map(({ image, category, content, authorImg, authorName, date, path }, id) => (
            <Link
              href={path}
              className="w-fit normal-case text-black transition-all duration-200 hover:scale-105"
              key={id}>
              <div>
                <div className="h-[250px] w-full overflow-hidden rounded-3xl shadow-xl">
                  <img src={image} alt={category} className=" h-full w-full  object-cover object-top" />
                </div>
                <div className="my-5">
                  <div className="flex items-center gap-5">
                    <span className="font-bold text-black">{category}</span>
                    <span className="text-[#777777]">{date}</span>
                  </div>

                  <p className="py-5 text-xl text-black">{content}</p>
                  <div className="mt-8 flex items-center gap-5">
                    <img src={authorImg} alt="" />
                    <span>{authorName}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button className="btn-outline btn-primary btn-wide btn mt-10 rounded-full text-center md:mt-20">
          Load more
        </button>
      </SlideUp>
    </div>
  );
};

export default Blog;
