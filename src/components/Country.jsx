import { Link, useNavigate, useParams } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";

const Country = () => {
  const { cca3 } = useParams();
  const countries = useSelector(state => state.countries.value);
  const navigate = useNavigate();

  const country = useMemo(() => {
    return countries.find(country => country.cca3 === cca3);
  }, [countries, cca3])
  
  



  return (

    <div className="mt-10 flex flex-col items-center mx-auto gap-10 desktop:gap-20 px-7 w-full max-w-[79.875rem]">
      <button className="text-primary flex items-center justify-center gap-2 shadow-md px-6 py-2 rounded-sm self-start" onClick={() => navigate(-1)}>
        <ArrowLeftIcon className="w-[1.125rem] h-[1.125rem] desktop:w-5 desktop:h-5" />
        <span>Back</span>
      </button>

      {country && (
        <div className="grid gap-11 desktop:flex desktop:justify-between desktop:w-full">
          <div className="w-[320px] h-[230px] desktop:w-[560px] desktop:h-[401px] relative rounded overflow-hidden shadow-sm">
            <img src={country.flags.png} alt={country.name.official} className="w-full h-full" />
          </div>

          <div className="text-primary flex flex-col gap-4">
            <h2 className="text-[1.375rem]/[1.875rem] desktop:text-[2rem]/[2.72rem] font-extrabold">{country.name.common}</h2>

            <div className="text-[.875rem]/8 desktop:text-base/8 grid gap-8 desktop:grid-cols-2">
              <div>
                <h3 className="font-semibold">Native Name: <span className="font-light">{Object.values(country.name.nativeName).find(lang => lang.hasOwnProperty('common'))['common']}</span></h3>
                <h3 className="font-semibold">Population: <span className="font-light">{country.population.toLocaleString('en-US')}</span></h3>
                <h3 className="font-semibold">Region: <span className="font-light">{country.region}</span></h3>
                <h3 className="font-semibold">Sub Region: <span className="font-light">{country.subregion}</span></h3>
                <h3 className="font-semibold">Capital: <span className="font-light">{country.capital}</span></h3>
              </div>

              <div>
                <h3 className="font-semibold">Top Level Domain: <span className="font-light">{country.cca2.toLowerCase()}</span></h3>
                <h3 className="font-semibold">Currencies: <span className="font-light">{Object.values(country.currencies).find(curr => curr.hasOwnProperty('name'))['name']}</span></h3>
                <h3 className="font-semibold">Languages: <span className="font-light">{Object.values(country.languages).join(", ")}</span></h3>
              </div>

              {country.borders && country.borders.length > 0 && (
                <div className="text-primary desktop:col-span-2">
                  <h2 className="text-base/6 font-semibold flex-shrink-0">Border Countries:</h2>
                  <div className="grid grid-cols-3 mt-2 items-center gap-2 desktop:gap-x-[10px]">
                    {country.borders && country.borders.map((border, idx) => (
                      <Link to={`/country/${border}`} key={idx} className="flex items-center justify-center gap-2 shadow-md rounded-sm">
                        {countries.find(country => country.cca3 === border).name.common}
                    </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}




    </div>
  )
}

export default Country