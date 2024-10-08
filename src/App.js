
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/index.tsx"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
