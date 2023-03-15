import Link from "next/link";
import { SlideDown } from "..";
import { footerLinks } from "../../helpers/data";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-white">
      <SlideDown duration={1}>
        <div className="py-10 font-light lg:py-20">
          <div className="section-container grid grid-cols-1 justify-between gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            <div className="col-span-5 w-full text-sm font-light  md:pr-0 lg:pr-32">
              <Link href="/" className="inline-block">
                <img src="/logo-black.svg" alt="Max-edge" className="max-h-8 md:max-h-24" />
              </Link>

              <p className="my-6 font-light leading-6 text-[#777777]">
                Social media validation business model <br /> canvas graphical user interface launch <br /> party
                creative facebook iPad twitter.
              </p>

              <p className="my-6 font-light leading-7 text-[#777777]">All rights reserved.</p>
            </div>

            <div className="col-span-2 w-full min-w-fit">
              {footerLinks?.slice(0, 1).map(({ heading, subMenus }, i) => (
                <div className="flex w-full flex-col" key={heading + i}>
                  <h3 className="mb-3 font-bold text-primary">{heading}</h3>
                  {subMenus.map((item, i) => (
                    <FooterLink item={item} key={i} />
                  ))}
                </div>
              ))}
            </div>

            <div className="col-span-2 w-full min-w-fit">
              {footerLinks?.slice(1, 2).map(({ heading, subMenus }, i) => (
                <div className="flex w-full flex-col" key={heading + i}>
                  <h3 className="mb-3 font-bold text-primary">{heading}</h3>
                  {subMenus.map((item, i) => (
                    <FooterLink item={item} key={i} />
                  ))}
                </div>
              ))}
            </div>

            <div className="col-span-2 w-full min-w-fit">
              {footerLinks?.slice(2).map(({ heading, subMenus }, i) => (
                <div className="flex w-full flex-col" key={heading + i}>
                  <h3 className="mb-3 font-bold text-primary">{heading}</h3>
                  {subMenus.map((item, i) => (
                    <FooterLink item={item} key={i} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideDown>
    </footer>
  );
};

export default Footer;
