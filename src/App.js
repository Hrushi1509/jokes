import './App.css';
import List from './component/List';
import Jokes from './component/Jokes';
import "./index.css"
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <div className='bg-slate-700 h-100vh'>
        <div className='h-4'>
          <h1 className='text-green-500 text-center text-4xl font-bold animate-bounce'>Chuck Norries</h1>
        </div>
        <div>
            
          <Routes>
            <Route path='/' element={<List/>}/>
            <Route path='/category' element={<Jokes/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
