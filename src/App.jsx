import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Metrics from "./pages/Metrics";
import { FullDataContextProvider } from "./context/FullDataContext";

function App() {
  return (
    <BrowserRouter>
      <FullDataContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/:id/metrics" element={<Metrics />} />
        </Routes >
      </FullDataContextProvider>
    </BrowserRouter>
  )
}

export default App