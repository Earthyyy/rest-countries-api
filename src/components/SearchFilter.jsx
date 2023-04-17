
import Filter from './Filter'
import SearchBar from './SearchBar'

const SearchFilter = () => {
  return (
    <div className="w-full max-w-[79.875rem] grid gap-10 desktop:flex desktop:gap-0 desktop:items-center desktop:justify-between">
        <SearchBar/>
        <Filter/>
    </div>
  )
}

export default SearchFilter