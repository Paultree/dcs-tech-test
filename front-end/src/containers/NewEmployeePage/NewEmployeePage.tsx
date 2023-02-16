import React from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";
import styles from "./NewEmployeePage.module.scss";

const NewEmployeePage = () => {
  const navigate: void = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className={styles.NewEmployeePage}>
      <div className={styles.NewEmployeePage_Header}>
        <p>
          &lt;&nbsp;<span onClick={handleClick}>Back</span>
        </p>
        <h1>Employee Details</h1>
      </div>
      <EmployeeForm />
    </div>
  );
};

export default NewEmployeePage;
