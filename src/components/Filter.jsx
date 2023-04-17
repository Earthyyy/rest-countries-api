import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef, useState } from "react"
import 'animate.css';
import { useDispatch, useSelector } from "react-redux";
import { setRegionFilter } from "../features/regionFilterSlice/regionFilterSlice";

const Filter = () => {
    const [show, setShow] = useState(false);
    const regionFilter = useSelector(state => state.regionFilter.value);
    const dispatch = useDispatch();
    

    const handleClick = () => {
        setShow(show => !show);
    }

    const handleRegionChange = ({target: {
        innerText
    }}) => {
        if (innerText === 'Reset') {
            dispatch(setRegionFilter(''));
        } else dispatch(setRegionFilter(innerText));
        setShow(false);
    }

    const menuRef = useRef(null);
    const buttonRef = useRef(null);



    useEffect(() => {
        function handleClickOutside(event) {

            if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setShow(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className='relative'>
            <div className="flex w-[12.5rem] items-center justify-between  bg-secondary pl-6 pr-[1.125rem] py-[0.875rem] desktop:py-[1.125rem] rounded-[5px] shadow-sm text-primary cursor-pointer" onClick={handleClick} ref={buttonRef}>
                <p className='font-normal text-xs/5 desktop:text-sm/5'>{regionFilter || 'Filter By Region'}</p>
                <ChevronDownIcon className="w-[0.625rem] h-[0.625rem] desktop:w-3 desktop:h-3" />

            </div>
            {
                show && (<ul className={`absolute top-full w-[12.5rem] z-10 left-0 rounded-[5px]  py-4 px-6 bg-secondary gap-2 grid animate-fade-in-down`} ref={menuRef}>
                    <li className="text-primary hover:font-semibold cursor-pointer" onClick={handleRegionChange}>Africa</li>
                    <li className="text-primary hover:font-semibold cursor-pointer" onClick={handleRegionChange}>Americas</li>
                    <li className="text-primary hover:font-semibold cursor-pointer" onClick={handleRegionChange}>Asia</li>
                    <li className="text-primary hover:font-semibold cursor-pointer" onClick={handleRegionChange}>Europe</li>
                    <li className="text-primary hover:font-semibold cursor-pointer" onClick={handleRegionChange}>Oceania</li>
                    <li className="text-primary hover:font-semibold cursor-pointer" onClick={handleRegionChange}>Reset</li>

                </ul>)
            }

        </div>
    )
}

export default Filter