import React from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export default function Donation_details() {
  const toastFun = () => {
    toast.success("Donation successfully");
    const data = window.localStorage.getItem("data");
    if (data == null) {
      window.localStorage.setItem("data", JSON.stringify([state.value]));
    } else {
      const jsonData = JSON.parse(data);
      window.localStorage.setItem(
        "data",
        JSON.stringify([...jsonData, state.value])
      );
    }
  };
  let { state } = useLocation();
  const { picture, text_button_bg, price, description, title } = state.value;
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-[70%]">
          <div
            className="details w-full h-[25rem] mt-[6rem] rounded-[0.5rem] flex items-end"
            style={{ backgroundImage: `url(${picture})` }}
          >
            <div className="w-full bg py-[2.31rem]">
              <button
                onClick={toastFun}
                className="py-[1rem] px-[1.62rem] rounded-[0.5rem] ml-8 text-white"
                style={{ backgroundColor: text_button_bg }}
              >
                Donate {price}
              </button>
            </div>
          </div>

          {/* text area */}
          <h1
            className="app-text mt-4"
            style={{ fontSize: "2rem", textAlign: "start" }}
          >
            {title}
          </h1>
          <p className="details_description mt-4">{description}</p>
        </div>
      </div>
    </>
  );
}
