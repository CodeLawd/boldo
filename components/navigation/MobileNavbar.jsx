import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { navLinks } from "../../helpers/data";

const MobileNavBar = ({ pageLink, setMenuOpen }) => {
  return (
    <aside className="flex flex-col gap-6 py-8 px-4">
      <div className="mt-2 mb-4 flex  justify-end px-2">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white"
          onClick={() => setMenuOpen(false)}>
          <XMarkIcon className="w-6 cursor-pointer text-primary" />
        </span>
      </div>

      <nav>
        <ul className="mt-4 flex flex-col gap-6">
          {navLinks?.map(({ path, title, subMenus }, i) =>
            subMenus ? (
              <details key={i}>
                <summary className="flex cursor-pointer items-center justify-between" key={title}>
                  <h2 className="font-normal capitalize text-white">{title}</h2>
                  <div>
                    <ChevronDownIcon className="w-3 text-white" />
                  </div>
                </summary>
                <div className="mt-2 flex flex-col gap-3 text-sm">
                  {subMenus.map(({ title, path, deepMenus }) =>
                    deepMenus ? (
                      <details key={i}>
                        <summary className="ml-2 flex cursor-pointer items-center justify-between text-sm" key={title}>
                          <h2 className="font-normal capitalize text-white">{title}</h2>
                          <div>
                            <ChevronDownIcon className="w-3 text-white" />
                          </div>
                        </summary>
                        <div className="flex flex-col gap-1 text-sm">
                          {deepMenus?.map(({ title, path }) => (
                            <Link
                              href={path}
                              key={path}
                              className="ml-3 rounded-md py-1 pl-3 capitalize text-[#d9d9d9] hover:text-accent"
                              onClick={() => setMenuOpen(false)}>
                              {title}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        href={path}
                        key={i}
                        className={`${
                          pageLink == path && "font-semibold text-accent"
                        } ml-2 text-sm  capitalize text-white hover:text-accent`}
                        onClick={() => setMenuOpen(false)}>
                        {title}
                      </Link>
                    )
                  )}
                </div>
              </details>
            ) : (
              <Link
                href={path}
                key={i}
                className={`${
                  pageLink == path && "font-semibold text-accent"
                } mx-auto w-fit text-2xl capitalize text-white hover:text-accent`}
                onClick={() => setMenuOpen(false)}>
                {title}
              </Link>
            )
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileNavBar;
