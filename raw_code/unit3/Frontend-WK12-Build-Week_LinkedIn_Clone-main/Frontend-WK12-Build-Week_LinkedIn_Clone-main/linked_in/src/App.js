import "bootstrap/dist/css/bootstrap.min.css"
import MainNavBar from "./components/navbar/MainNavBar"
import { Container } from "react-bootstrap"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainProfilePage from "./components/MainProfilePage"
import HomePage from "./components/homepage/HomePage"

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <MainNavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile-page" element={<MainProfilePage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  )
}

export default App
