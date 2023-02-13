import React from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import styles from "./EmployeeContainer.module.scss";

const EmployeeContainer = () => {
  return (
    <div className={styles.EmployeeContainer}>
      <div>
        <p>Please click on 'Edit' to find more details of each employee.</p>
        <button>Add employee</button>
      </div>
      <div>
        <EmployeeCard />
      </div>
    </div>
  );
};

export default EmployeeContainer;
