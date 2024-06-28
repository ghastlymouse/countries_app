import React from "react";
import CountryList from "./components/CountryList";
import "./App.css";

const App: React.FC = () => {
  return (
    <section className="bg-sky-300 font-jua text-base">
      <div className="w-[1280px] my-0 mx-auto ">
        <CountryList />
      </div>
    </section>
  );
};

export default App;
