import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import { useState } from "react"
function App() {
  const [showModal, setShowModal] = useState(true)

  function handleToggleModal(){
    setShowModal(!showModal)
  }
  

  return (
    <>
      <Main />
      {showModal && (<Sidebar />)}     
      <Footer showModal={showModal} handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
