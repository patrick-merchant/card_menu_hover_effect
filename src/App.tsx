import React from "react";
import "./App.css";
import { CardWrapper } from "./components/card-wrapper";
import { ICardProps } from "./components/types";
import data from "./json/data.json";

function App() {
  return (
    <>
      <div className="flex overflow-x-scroll snap-x snap-mandatory lg:overflow-x-auto relative box-content">
        <div className="flex flex-col flex-shrink-0 grow-0 basis-60 snap-start scroll-m-1 mt-16 mr-4 justify-end p-6 -translate-y-2.5 relative bg-black rounded-xl border-4 border-text-orange ">
          <h2 className="text-3xl font-rubik font-extrabold mt-0 mx-0 mb-6">
            Popular this month
          </h2>
          <p>
            Recreated by
            <br />
            <a href="#" className="text-[#0089c7]">
              Patrick Merchant
            </a>
          </p>
        </div>
        <CardWrapper cards={data.cards as ICardProps[]} />
      </div>
    </>
  );
}

export default App;
