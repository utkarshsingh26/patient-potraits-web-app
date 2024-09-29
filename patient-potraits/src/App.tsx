import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Avatar from './pages/Avatar';
import Timeline from './pages/Timeline';

function App(){
  return (<div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/avatar" element={<Avatar/>} />
      <Route path="/timeline" element={<Timeline/>} />
    </Routes>
    </BrowserRouter>
  </div>)
}

export default App;