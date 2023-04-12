import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'


const SearchBar = () => {
  return (
    <div className="bg-secondary py-4 desktop:py-[1.1875rem] p-8 flex items-center gap-[1.625rem] desktop:gap-6 rounded-[5px] shadow-sm desktop:w-[30rem]">
            <MagnifyingGlassIcon className="w-4 h-4 text-secondary desktop:w-[1.125rem] desktop:h-[1.125rem] cursor-pointer font-semibold"/>
            <input type="text" name="search" id="search" className='flex-1 outline-none border-none bg-transparent text-secondary font-normal text-xs/5 desktop:text-sm/5' placeholder='Search for a country...'/>
    </div>
  )
}

export default SearchBar