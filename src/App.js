import Layout from './components/Layout';

import './components/Layout.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashbord from './components/Dashbord';
import Products from './components/Products';
import ExpenceData from './components/ExpenceData';
import SalesTable from './components/SalesTable';
import Login from './components/Login';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<Layout />}>
            <Route path='/admin/dashboard' element={<Dashbord />}></Route>
            <Route path='/admin/products' element={<Products />}></Route>
            <Route path='/admin/salestable' element={<SalesTable />}></Route>
            <Route path='/admin/expencedata' element={<ExpenceData />}></Route>
          </Route>
          <Route path="logout" element={<Login />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
