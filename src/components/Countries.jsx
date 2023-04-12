import { useQuery } from "@tanstack/react-query"
import CountryCard from "./CountryCard"



const Countries = () => {
    
    const { data, isLoading, error } =
    useQuery({
        queryKey: ["countries"],
        queryFn: () => fetch("https://restcountries.com/v3.1/all").then(res => res.json())
    })

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error</p>

  return (
    <div className="w-full max-w-[80rem] flex flex-row flex-wrap  gap-[2.5rem] desktop:gap-[4.625rem] justify-center">
        {data.map((country) => {
            return (
                <CountryCard country={country} />
            )})
        }
    </div>
  )
}

export default Countries