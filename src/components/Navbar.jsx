import { MoonIcon as MoonIconOutline } from '@heroicons/react/24/outline'
import { MoonIcon as MoonIconSolid } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { setTheme } from '../features/themeSlice/themeSlice';

const Navbar = () => {
    const theme = useSelector(state => state.theme.value);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setTheme(theme === 'dark' ? '' : 'dark'))
        localStorage.setItem('theme', theme === 'dark' ? '' : 'dark')
    }

    return (
        <nav className="w-full p-4 flex items-center justify-center bg-secondary shadow-md transition-colors duration-300">
            <div className="w-full max-w-[79.875rem] flex items-center justify-between">
                
                <Link to="/">
                <h1 className="font-extrabold text-primary text-[.875rem]/[1.25rem] desktop:text-2xl/[32.74px] cursor-pointer">Where in the world?</h1>
                </Link>

                <div className='flex items-center gap-2 cursor-pointer text-primary' onClick={handleClick}>
                    {theme === 'dark' ? <MoonIconSolid className='w-4 h-4 desktop:w-5 desktop:h-5' /> : <MoonIconOutline className='w-4 h-4 desktop:w-5 desktop:h-5' />}
                    <p className='text-xs font-semibold desktop:text-base/[21.82px]'>Dark Mode</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar