import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div
      className="flex flex-row gap-x-3 rounded-[0.5rem]"
      style={{ backgroundColor: data.card_bg }}
    >
      <img src={data.picture} alt="img" className="w-[50%] h-auto" />
      <div>
        <p
          style={{
            color: data.text_button_bg,
            backgroundColor: data.category_bg,
          }}
          className=" w-fit px-[0.5rem] py-[0.2rem] rounded-[0.25rem] mt-3 text-[0.85rem]"
        >
          {data.category}
        </p>

        <h1 className="text-black font-semibold text-[1.3rem] mt-4">
          {data.title}
        </h1>
        <p className="font-semibold" style={{ color: data.text_button_bg }}>
          {data.price}.00
        </p>

        <button
          className="py-[0.125rem] px-[0.62rem] text-[0.85rem] mt-4 mb-3 rounded-[0.25rem]  text-white"
          style={{ backgroundColor: data.text_button_bg }}
        >
          <Link to={`/details/${data.id}`} state={{ value: data }}>
            View details
          </Link>
        </button>
      </div>
    </div>
  );
}

export default function Donation() {
  const [data, setData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(4); // Initially, show 4 items

  useEffect(() => {
    const storedData = window.localStorage.getItem("data");
    if (storedData !== null) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleSeeMore = () => {
    // Increase the number of items to show when "See More" is clicked
    setItemsToShow(data.length);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center mt-[6rem]">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 sm:w-[355px] md:w-[465px] lg:w-[768px] xl:w-[995px]">
          {data.slice(0, itemsToShow).map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
      {itemsToShow < data.length && (
        <div className="flex justify-center mt-4">
          <button
            className="py-[0.45rem] mt-3 px-[1.62rem] text-[1.2rem] rounded-[0.25rem] text-white bg-[#009444]"
            onClick={handleSeeMore}
          >
            See All
          </button>
        </div>
      )}
    </>
  );
}
