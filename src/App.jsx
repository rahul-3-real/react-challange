import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/delivery" element={<Home />} />
        <Route path="/marketing" element={<Home />} />
        <Route path="/analytics" element={<Home />} />
        <Route path="/payments" element={<Home />} />
        <Route path="/tools" element={<Home />} />
        <Route path="/discount" element={<Home />} />
        <Route path="/audience" element={<Home />} />
        <Route path="/appearance" element={<Home />} />
        <Route path="/plugins" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
