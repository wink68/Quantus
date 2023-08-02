import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Allocation from './components/Allocation/Allocation';


function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path='/alloc' element={<Allocation />} />
    </Routes>
  </BrowserRouter>
}

export default Router;