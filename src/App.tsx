

import { Route, Routes } from 'react-router-dom';
import Start from './start/Start';
import Home from './home/Home';
import User from './users/User';
import NavbarMobil from './home/NavbarMobil';
import Login from './security/Login';
import BasicSearch from './search/BasicSearch';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route  path="/" element={<Start/>}/>
        <Route  path="/home" element={<Home/>}/>
        <Route  path="/user" element={<User/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route path="/nbm" element={<NavbarMobil/>}/>
        <Route path="/search" element={<BasicSearch/>}/>

      </Routes>
    </div>
  )
}

export default App;
