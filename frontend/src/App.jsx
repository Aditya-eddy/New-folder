import './App.css'
// import {Container} from './components/container/Container'
// import { Dashboard } from './pages/Dashboard'
// import { Signin } from './pages/Signin'
// import { Signup } from './pages/Signup'
import { SignupPage } from './pages/SignupPage'
import { SigninPage } from './pages/SigninPage'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
