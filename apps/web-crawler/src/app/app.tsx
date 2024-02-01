// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Product from '../pages/product'
import NoPage from '../pages/no-page'

import { Route, Routes, Link, BrowserRouter, Navigate } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/'>
            <Route index element={<Navigate to='/product' replace />} />
            <Route path='/product' element={<Product />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
