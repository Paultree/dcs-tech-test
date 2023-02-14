import React from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import styles from "./EmployeeContainer.module.scss";
import { useNavigate } from "react-router-dom";

const EmployeeContainer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/new");
  };

  return (
    <div className={styles.EmployeeContainer}>
      <h1>Employee's List</h1>
      <div>
        <p>Please click on 'Edit' to find more details of each employee.</p>

        <button onClick={handleClick}>Add employee</button>
      </div>
      <div>
        <EmployeeCard />
      </div>
    </div>
  );
};

export default EmployeeContainer;
