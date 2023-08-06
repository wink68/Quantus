import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Allocation from './components/Allocation/Allocation';
import StaticAlloc from './pages/Stategies/StaticAlloc/StaticAlloc';

function Router() {
  return (
    <Routes>
      <Route path='/alloc/*' element={<Allocation />}>
        <Route path='static_alloc' element={<StaticAlloc />} />
      </Route>
    </Routes>
  );
}

export default Router;