import { MoonIcon } from '@heroicons/react/24/outline'
const Navbar = () => {
  return (
    <nav className="w-full p-4 flex items-center justify-center bg-secondary shadow-md">
        <div className="w-full max-w-[79.875rem] flex items-center justify-between">
            <h1 className="font-extrabold text-primary text-[.875rem]/[1.25rem] desktop:text-2xl/[32.74px]">Where in the world?</h1>

            <div className='flex items-center gap-2 cursor-pointer text-primary'>
                <MoonIcon className='w-4 h-4 desktop:w-5 desktop:h-5'/>
                <p className='text-xs font-semibold desktop:text-base/[21.82px]'>Dark Mode</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar