import './App.css'
import Hero from './sections/hero'
import Navbar from './sections/navbar'
import Info from './sections/info'
import Bussiness from './sections/bussiness'
import GetStarted from './sections/get-started'
import Plans from './sections/plans'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Bussiness />
      <GetStarted />
      <Plans />
    </>
  )
}

export default App
