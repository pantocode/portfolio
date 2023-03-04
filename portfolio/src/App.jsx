import { Header } from './components/Header';
import { Home } from './Pages/Home';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ContacMe } from './Pages/ContacMe';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact-me' element={<ContacMe/>}/>
        </Routes>
      </BrowserRouter>
    </>
    )
}

export default App
