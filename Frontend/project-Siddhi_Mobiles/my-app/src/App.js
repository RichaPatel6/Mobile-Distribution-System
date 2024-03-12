import Header from './components/Header';
import Footer from './components/Footer';

import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Header></Header> */}
    
    <Outlet></Outlet> 
    </>
  );
}

export default App;
