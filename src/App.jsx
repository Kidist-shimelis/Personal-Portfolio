import React from 'react'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts' // ✅ Correct (relative path)
import Hero from './Components/Hero/Hero'
import MyWork from './Components/MyWork/MyWork'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
                 <Navbar/>

<Hero/>
<About/>
<Contacts/>
<Skills/>
<MyWork/>
<Footer/>
    </div>
  )
}

export default App