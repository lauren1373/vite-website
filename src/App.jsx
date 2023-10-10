import { BrowserRouter } from 'react-router-dom';
import { About, Skills, Experience, Navbar } from './components';
 
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-background'>
        <div className='bg-primary bg-center'>
          <Navbar />
        </div>
        <About />
        <Skills />
        <Experience />
      </div>
    </BrowserRouter>
  )
}

export default App
