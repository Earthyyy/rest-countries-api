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
    <div className="App dark">
      <Navbar/>

      <QueryClientProvider client={queryClient}>
      <main className="bg-primary">
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
