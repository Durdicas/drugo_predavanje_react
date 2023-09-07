//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import vratiTekst from './helper.js'
import pismoIliGlava from 'coinflipperjs'
import randomstring from 'randomstring-ng'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <h1>Naslov</h1>
        {
          ['proizvod 1', 'proizvod 2', 'proizvod 3'].map(proizvod => {
            return (
              <h2 key=''>{proizvod}</h2>
            )
          })
          }
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Magni eius aliquam, quidem possimus quos
            omnis sint sequi et aperiam quia!
            {vratiTekst() + "još nekakav tekst"}
            </p>
            <img src="" alt="" />

          <h2> Pismo ili glava: {pismoIliGlava()} </h2>
          <h3> {randomstring.generate()} </h3>
        
    </>
  )}
        

export default App
