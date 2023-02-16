import EmployeeContainer from "./containers/EmployeeContainer/EmployeeContainer";
import styles from "./App.module.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import NewEmployeePage from "./containers/NewEmployeePage/NewEmployeePage";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<EmployeeContainer />} />
        <Route path="/new" element={<NewEmployeePage />} />
        <Route path="/modify/:id" element={<EmployeeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
