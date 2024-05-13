import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import UploadFiles from "./Pages/UploadFiles/UploadFiles";
import './App.css';
import SearchBadges from "./Pages/SearchBadges/SearchBadges";

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/uploadfiles" element={<UploadFiles />} />
            <Route path="/searchbadges" element={<SearchBadges />} />


 
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
