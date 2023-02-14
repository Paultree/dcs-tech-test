import EmployeeContainer from "./containers/EmployeeContainer/EmployeeContainer";
import styles from "./App.module.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import NewEmployeePage from "./containers/NewEmployeePage/NewEmployeePage";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<EmployeeContainer />} />
        <Route path="/new" element={<NewEmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
