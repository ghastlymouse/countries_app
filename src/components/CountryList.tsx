import { useEffect, useState } from "react";
import { getCountries } from "../api/countries";
import { Country } from "../types/country";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
      setCountries(
        countries.filter((prevcountry: Country) => {
          return prevcountry.name.common !== country.name.common;
        })
      );
    } else {
      setSelectedCountries(
        selectedCountries.filter((selectedCountry: Country) => {
          return selectedCountry.name.common !== country.name.common;
        })
      );
      setCountries([country, ...countries]);
    }
  };

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error("나라 데이터를 불러오는데에 실패했습니다 : ", error);
        alert("데이터를 불러오는 데에 실패했습니다.");
      }
    };
    getAllCountries();
  }, []);

  console.log(countries);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center w-full bg-white border-solid border-4 border-black rounded-md">
          <h1 className="text-3xl">전 세계 모든 나라</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-white border-solid border-4 border-black rounded-md">
          <h1 className="text-red-700 text-2xl p-4">주적</h1>
          <div className=" w-full p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedCountries.map((country: Country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  country={country}
                  handleSelectedCountry={handleSelectCountry}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-white border-solid border-4 border-black rounded-md">
          <h1 className="text-green-700 text-2xl p-4">그 외</h1>
          <div className="w-full p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {countries.map((country: Country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  country={country}
                  handleSelectedCountry={handleSelectCountry}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryList;
