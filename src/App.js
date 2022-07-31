import Header from './components/Header'
import Home from './pages/Home'
import NYlist from './pages/NYC-list';

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/nyc-list' element={<NYlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
