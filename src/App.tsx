import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import SignUp from './Pages/SignUp';
import Login from './Pages/LoginIn';

function App() {
  

  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes here as needed */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
