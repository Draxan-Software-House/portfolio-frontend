import Layout from "./components/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

const Comp = (<h1 className="text-3xl text-neutral font-bold underline">
    Hello world!
  </h1>);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
         // element={<Navigate to='/dashboard' replace />} 
         element={Comp}
         />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;