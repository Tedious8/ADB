import { useState } from "react";
import Hamburger from "../assets/icons/burger-menu-svgrepo-com.svg";
import Cancel from "../assets/icons/cancel-svgrepo-com.svg";

export default function Drawer({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="w-16 h-16 px-4 rounded-full bg-[#FAFAFA] outline-1 outline absolute top-2 right-2 z-30 lg:z-10 cursor-pointer"
        onClick={handleClickHamburger}
      >
        {isOpen ? (
          <img src={Cancel} alt="" className="w-16 h-16 " />
        ) : (
          <img src={Hamburger} alt="" className="w-16 h-16 " />
        )}
      </div>
      {isOpen && (
        <div className="fixed z-20 w-full h-svh ">
          <div className="fixed w-full h-2/3 lg:w-1/2 lg:right-0 lg:h-full rounded-t-2x lg:rounded-l-2xl bg-[#FAFAFA] bottom-0 l">
            <div className="flex flex-col gap-2 w-full h-full p-3">
              <div className="flex justify-between items-center gap-6 w-full">
                <div className=" overflow-x-scroll flex gap-2">
                  <div className="w-fit h-full">Feature 1</div>
                  <div className="w-fit h-full">Feature 2</div>
                  <div className="w-fit h-full">Feature 3</div>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <img src={Cancel} alt="" className="w-5 h-5" />
                </div>
              </div>
              <div className="h-full overflow-y-scroll">{children}</div>
              <div className="w-full flex justify-end gap-6">
                <div className="border border-blue-600 px-4 py-2 rounded-md cursor-pointer">
                  Reset
                </div>
                <div className="bg-blue-600 text-[#FAFAFA] px-4 py-2 rounded-md cursor-pointer">
                  Query
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
