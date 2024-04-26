import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import UploadFiles from "./Pages/UploadFiles/UploadFiles";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/uploadfiles" element={<UploadFiles />} />
 
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
