import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Allocation from './components/Allocation/Allocation';
import StaticAlloc from './pages/Stategies/StaticAlloc/StaticAlloc';

function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path='/alloc' element={<Allocation />}>
        <Route path='/alloc/static_alloc' element={<StaticAlloc />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Router;