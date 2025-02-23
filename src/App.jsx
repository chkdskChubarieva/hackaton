import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import PageMap from "./pages/PageMap";
import LayoutPublic from "./layouts/LayoutPublic";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          <Route index element={<PageMap />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App
