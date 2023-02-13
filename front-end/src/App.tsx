import EmployeeContainer from "./containers/EmployeeContainer/EmployeeContainer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h1>Employee's List</h1>
      <EmployeeContainer />
    </div>
  );
}

export default App;
