import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav className="w-full flex justify-center items-center">
        {/* root layout */}
        <div className="flex justify-between items-center mt-8 flex-wrap sm:w-[320px] md:w-[668px] lg:w-[1024px] xl:w-[1169px] ">
          <div className="sm:w-full md:w-fit flex justify-center items-center">
            <img src="/Logo.png" alt="logo" />
          </div>

          {/* link layout */}
          <div className="sm:w-full md:w-fit justify-center items-center">
            <div className="flex flex-row gap-x-[2.6rem] justify-between sm:mt-6 text-[1.125rem] font-semibold">
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
              <Link
                to="/donation"
                className={location.pathname === "/donation" ? "active" : ""}
              >
                Donation
              </Link>
              <Link
                to="/statistic"
                className={location.pathname === "/statistic" ? "active" : ""}
              >
                Statistic
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
