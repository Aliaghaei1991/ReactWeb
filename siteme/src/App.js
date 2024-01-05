import Header from "./pages/Header";
import Body from "./pages/Body";

import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (

    <div dir="rtl" className="container">

      <Router>
        <Routes>
          <Route action={"/Header"} element={<Header />} />
        </Routes>
      </Router>
      <Header />
      <Body />

  <p>edit</p>


    </div>


  );
}

export default App;
