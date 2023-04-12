import { Route, Routes } from "react-router-dom"
import { Country, Home, Navbar } from "./components"
import { useState } from "react"
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

const queryClient = new QueryClient();

function App() {
  const [theme, setTheme] = useState("");

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={{
        theme,
        setTheme
      }}/>

      <QueryClientProvider client={queryClient}>
      <main className="bg-primary transition-colors duration-400 ease-out">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:country" element={<Country/>} /> 
        </Routes>
      </main>
      </QueryClientProvider>

    </div>
  )
}

export default App
