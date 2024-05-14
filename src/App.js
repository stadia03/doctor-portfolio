import Home from "./screens/Home";
import Appointment from "./screens/Appointment";
import Contact from "./screens/Contact";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import { CartProvider } from "./components/ContextReducer.js";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/appointments" element={<Appointment />} />
          </Routes>
          <Routes>
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
         
        </div>

      </Router>

  );
}

export default App;
