import { ChevronDownIcon } from "@heroicons/react/24/solid"

const Filter = () => {
  return (
    <div className='flex w-[12.5rem] items-center justify-between cursor-pointer bg-secondary pl-6 pr-[1.125rem] py-[0.875rem] desktop:py-[1.125rem] rounded-[5px] shadow-sm text-primary'>
            <p className='font-normal text-xs/5 desktop:text-sm/5'>Filter By Region</p>
            <ChevronDownIcon className="w-[0.625rem] h-[0.625rem] desktop:w-3 desktop:h-3"/>
    </div>
  )
}

export default Filter