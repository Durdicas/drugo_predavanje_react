import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Glavni, { Naslov, Naslov2 } from './Naslovi'
//import NeBasTakoGlavni, { Naslov, Naslov2 as Naslovic } from './Naslovi'
import * as bundled from './Naslovi'

function App() {
  

  return (
    <>
      <bundled.default />
      <bundled.Naslov />
      <bundled.Naslov2 />
    </>
  )
}

export default App
