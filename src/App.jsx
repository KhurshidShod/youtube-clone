import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/homepage";
import VideoPage from "./pages/videopage";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/watch/:video" element={<VideoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
