
import Countries from "./Countries"
import SearchFilter from "./SearchFilter"



const Home = () => {


  return (
    <div className="w-full p-4 flex flex-col items-center justify-center gap-8 desktop:gap-12">
      <SearchFilter />
      <Countries />
    </div>
  )
}

export default Home