import React from "react";
import CountryList from "./components/CountryList";
import "./App.css";

const App: React.FC = () => {
  // 타입스크립트는 자바스크립트로 100% 치환
  // 브라우저에서는(런타임시점) 자바스크립트로 동작
  // vscode에서는(컴파일시점) 타입스크립트로 동작

  return (
    <section className="bg-sky-300 font-jua text-base">
      <div className="w-[1280px] my-0 mx-auto ">
        <CountryList />
      </div>
    </section>
  );
};

export default App;
