import DataGridPatients from "./components/Datagrid";
import { Route, Routes } from "react-router-dom";
import { Page404 } from "./pages/Page404";
import { NavBar } from "./components/NavBar";
import AddPatientForm from "./pages/AddPatientForm";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<DataGridPatients />} exact="true" />
        <Route path="/addForm" element={<AddPatientForm />} exact="true" />
        <Route path="/dashboard" element={<Dashboard />} exact="true" />
        <Route path="/404" element={<Page404 />} exact="true" />
      </Routes>
    </div>
  );
}

export default App;
