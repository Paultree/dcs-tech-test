import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeListPage from "./containers/EmployeeListPage/EmployeeListPage";
import NewEmployeePage from "./containers/NewEmployeePage/NewEmployeePage";
import UpdateEmployeePage from "./containers/UpdateEmployeePage/UpdateEmployeePage";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<EmployeeListPage />} />
        <Route path="/add-employee" element={<NewEmployeePage />} />
        <Route path="/edit-employee/:id" element={<UpdateEmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
