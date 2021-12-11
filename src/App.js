import { Routes, Route } from "react-router-dom"
import { Home, About, Events, Budget, Oops} from "./pages"


function App() {
  return (
    <div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="*" element={<Oops />} />
          </Routes>
    </div>
  );
}

export default App;
