import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelectedCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectedCountry,
}) => {
  return (
    <div
      className="bg-slate-200 flex flex-col justify-center items-center gap-1 border-solid border-2 border-black p-4 rounded-md"
      onClick={() => handleSelectedCountry(country)}
    >
      <img className="w-40 h-20" src={country.flags.svg} />
      <h1 className="text-xl">{country.translations.kor.official}</h1>
      <h3 className="text-lg">{country.capital}</h3>
    </div>
  );
};

export default CountryCard;
