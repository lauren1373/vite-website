import { BrowserRouter } from 'react-router-dom';
import { About, Navbar } from './components';
 
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-background'>
        <div className='bg-primary bg-center'>
          <Navbar />
        </div>
        <About />
      </div>
    </BrowserRouter>
  )
}

export default App
