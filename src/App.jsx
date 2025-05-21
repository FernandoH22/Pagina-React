import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/styles/main.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Home />
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", margin: "2rem 0" }}>
        <button className="custom-btn home-btn">
          <i className="fas fa-home"></i> Inicio
        </button>
        <button className="custom-btn bio-btn">
          <i className="fas fa-user"></i> Biografía
        </button>
        <button className="custom-btn film-btn">
          <i className="fas fa-film"></i> Filmografía
        </button>
        <button className="custom-btn gallery-btn">
          <i className="fas fa-images"></i> Galería
        </button>
      </div>
    </Router>
  );
}

export default App;