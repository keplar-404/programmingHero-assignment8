import { Link } from "react-router-dom";
import json from "./data.json";
import { useRef, useState } from "react";
import { useLocation } from 'react-router-dom';

function Card({ data }) {

  const location = useLocation();
  const currentPathname = location.pathname;
  console.log(currentPathname)

  const { id, picture, title, category, card_bg, category_bg, text_button_bg } =
    data;
  return (
    <>
      <Link
        to={`/details/${id}`}
        state={{ value: data }}
        className="sm:w-full md:w-fit flex justify-center items-center"
      >
        <div
          style={{ backgroundColor: card_bg }}
          className="w-[16.5rem] cursor-pointer"
        >
          <img src={picture} alt="img" />
          <p
            className="py-[4px] w-fit h-fit rounded-[0.25rem] mt-4 ml-4 px-[10px] font-medium text-[0.875rem]"
            style={{ color: text_button_bg, backgroundColor: category_bg }}
          >
            {category}
          </p>

          <h1
            className="text-[1.25rem] font-semibold py-2 px-4"
            style={{ color: text_button_bg }}
          >
            {title}
          </h1>
        </div>
      </Link>
    </>
  );
}

function App() {
  const ref = useRef(null);
  const [card, setCard] = useState(json);

  const search = () => {
    const data_ = ref.current.value;
    const filteredData = json.filter((data) => data.category == data_);

    if (filteredData.length === 0) {
      setCard(null);
    } else {
      setCard(filteredData);
    }
  };
  return (
    <>
      <section className="app flex flex-col gap-y-6 justify-center items-center ">
        <h1 className="app-text sm:mt-[9rem] md:mt-0">
          I Grow By Helping People In Need
        </h1>
        <div className="flex sm:flex-col md:flex-row items-center">
          <input
            ref={ref}
            type="text"
            placeholder="    Search here...."
            className="bg-white active:border-none focus:border-none h-[3.5rem] border-[2px] rounded-tl-[0.5rem] rounded-bl-[0.5rem] sm:rounded-br-[0.5rem] sm:rounded-tr-[0.5rem] md:rounded-br-[0rem] md:rounded-tr-[0rem] text-black sm:w-[18rem] lg:w-[29.375rem] pr-3"
          />
          <button
            onClick={search}
            className="h-[3.5rem] sm:mt-3 md:mt-0 app-btn py-[1rem] px-[1.69rem] text-white font-semibold"
          >
            Search
          </button>
        </div>
      </section>

      {/* json data section */}
      <div className="w-full flex justify-center items-center mt-[6rem]">
        <section className="flex sm:flex-col md:flex-row justify-center flex-wrap sm:w-[19.875rem] md:w-[40.875rem] lg:w-[61.875rem] 2xl:w-[82.875rem] gap-4">
          {card === null ? (
            <p className="font-bold text-[3rem]"> No data found </p>
          ) : (
            card.map((data) => <Card key={data.id} data={data} />)
          )}
        </section>
      </div>
    </>
  );
}

export default App;
