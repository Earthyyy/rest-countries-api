import CountryCard from "./CountryCard"
import {useMemo } from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";





const Countries = () => {
    const countries = useSelector(state => state.countries.value);
    const searchFilter = useSelector(state => state.searchInput.value);
    const regionFilter = useSelector(state => state.regionFilter.value);


    const filteredItems = useMemo(() => {
        
        return countries.filter(country => {
            return country.name.common.toLowerCase().includes(searchFilter.toLowerCase()) && (country.region === regionFilter || regionFilter === '')
        })
    }, [searchFilter, countries, regionFilter]);





    return (
        <div className="w-full max-w-[80rem] flex flex-row flex-wrap  gap-[2.5rem] desktop:gap-[4.625rem] justify-center">
            {filteredItems && filteredItems.map((country, idx) => {
                return (
                    <Link to={`/country/${country.cca3}`} key={idx}>
                        <CountryCard country={country} />
                    </Link>
                )
            })
            }
        </div>
    )
}

export default Countries