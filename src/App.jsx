import { useState } from "react"
import Header from "./components/global/header/Header"
import ModalWindow from "./components/local/modalWindow/ModalWindow"
import MainPage from "./pages/mainPage/MainPage"
import { Route, Routes } from "react-router-dom"

function App() {
  const [onShowModal, setOnShowModal] = useState(false)
  const [showedCharacter, setShowedCharacter] = useState(null)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage
          onShowModal={onShowModal}
          setOnShowModal={setOnShowModal}
          showedCharacter={showedCharacter}
          setShowedCharacter={setShowedCharacter}
        />} />
        
      </Routes>
      {onShowModal && (
        <ModalWindow
          showedCharacter={showedCharacter}
          setOnShowModal={setOnShowModal}
        />
      )}
    </>
  );
}

export default App
