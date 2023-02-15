import React from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";
import styles from "./NewEmployeePage.module.scss";

const NewEmployeePage = () => {
  const navigate: void = useNavigate();

  return (
    <div className={styles.NewEmployeePage}>
      <h1>Employee Details</h1>
      <EmployeeForm />
    </div>
  );
};

export default NewEmployeePage;
