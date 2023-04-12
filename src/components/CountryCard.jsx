

const CountryCard = ({country}) => {
  return (
    <div className="bg-secondary w-[16.5rem] relative grid gap-6 rounded-[5px] overflow-hidden cursor-pointer transition transform hover:scale-105 ease-out duration-300">
        <img src={country.flags.png} alt={country.name.official} className="w-full h-[164px]" />
        <div className="grid gap-4 px-6 pb-[2.875rem]">
            <h2 className="text-primary text-lg/[1.625rem] font-extrabold">{country.name.official}</h2>
            <div className="text-[.875rem]/4 text-primary grid gap-2">
                <h3 className="font-semibold">Population: <span className="font-light">{country.population.toLocaleString('en-US')}</span></h3>
                <h3 className="font-semibold">Region: <span className="font-light">{country.region}</span></h3>
                <h3 className="font-semibold">Capital: <span className="font-light">{country.capital}</span></h3>
            </div>
        </div>
    </div>
  )
}

export default CountryCard