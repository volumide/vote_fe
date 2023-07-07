import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Lga from "./pages/lga"
import Pu from "./pages/pu"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/lga" element={<Lga />} />
            <Route path="/pu" element={<Pu />} />
            <Route path="/pu/:id" element={<Pu />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
    </>
  )
}

export default App
