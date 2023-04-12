import { MoonIcon as MoonIconOutline } from '@heroicons/react/24/outline'
import { MoonIcon as MoonIconSolid } from '@heroicons/react/24/solid'

const Navbar = ({ theme: {
    theme,
    setTheme
} }) => {

    const handleClick = () => {
        setTheme(theme === 'dark' ? '' : 'dark')
    }

    return (
        <nav className="w-full p-4 flex items-center justify-center bg-secondary shadow-md transition-colors duration-300">
            <div className="w-full max-w-[79.875rem] flex items-center justify-between">
                <h1 className="font-extrabold text-primary text-[.875rem]/[1.25rem] desktop:text-2xl/[32.74px]">Where in the world?</h1>

                <div className='flex items-center gap-2 cursor-pointer text-primary' onClick={handleClick}>
                    {theme === 'dark' ? <MoonIconSolid className='w-4 h-4 desktop:w-5 desktop:h-5' /> : <MoonIconOutline className='w-4 h-4 desktop:w-5 desktop:h-5' />}
                    <p className='text-xs font-semibold desktop:text-base/[21.82px]'>Dark Mode</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar