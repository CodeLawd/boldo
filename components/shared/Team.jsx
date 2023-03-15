import { useEffect, useRef, useState } from "react";
import { staff } from "../../helpers/data";

const Team = () => {
  const [activeStaff, setActiveStaff] = useState({});
  const modal = useRef(null);

  const handleClick = (item) => {
    setActiveStaff(item);
    modal.current.click();
  };

  useEffect(() => {
    setActiveStaff(staff[0]);
  }, []);

  return (
    <>
      <section className="bg-[#FFF5F7] text-center dark:bg-primary dark:bg-opacity-10">
        <div className="bg-container section-padding"></div>
      </section>
    </>
  );
};

export default Team;
