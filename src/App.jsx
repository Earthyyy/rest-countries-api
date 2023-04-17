import { Route, Routes } from "react-router-dom"
import { Country, Home, Navbar } from "./components"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "./features/countriesSlice/countriesSlice";
import { setTheme } from "./features/themeSlice/themeSlice";




function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    let T = localStorage.getItem("theme");
    if (T === null) {
      localStorage.setItem("theme", "")
    } else {
      dispatch(setTheme(T))
    }


    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        dispatch(setCountries(data))
      })
  }, [])





  const theme = useSelector(state => state.theme.value);
  return (
    <div className={`App ${theme} bg-primary min-h-screen`}>
      <Navbar />

      <main className="bg-primary transition-colors duration-400 ease-out">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/country/:cca3" element={<Country/>} /> 
        </Routes>
      </main>

    </div>
  )
}

export default App
