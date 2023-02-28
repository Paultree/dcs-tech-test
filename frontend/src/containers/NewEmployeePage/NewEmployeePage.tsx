import React from "react";
import { useMutation } from "react-query";
import { createEmployee } from "../../services/api";
import { ThreeDots } from "react-loader-spinner";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import styles from "./NewEmployeePage.module.scss";
import { useNavigate } from "react-router-dom";
import { Employee } from "../../services/employee";

const NewEmployeePage = () => {
  const navigate = useNavigate();

  const toHome: () => void = () => {
    navigate("/");
  };

  const { mutateAsync, isLoading } = useMutation(createEmployee);

  const onFormSubmit = async (data: Employee) => {
    await mutateAsync(data);
    toHome();
  };

  return (
    <div className={styles.NewEmployeePage}>
      <div className={styles.NewEmployeePage_Header}>
        <p onClick={toHome}>&#60; Back</p>
        <h1>New Employee</h1>
      </div>
      <div className={styles.NewEmployeePage_Form}>
        {isLoading ? (
          <ThreeDots color="rgba(255, 255, 255, 0.87)" />
        ) : (
          <EmployeeForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
        )}
      </div>
    </div>
  );
};

export default NewEmployeePage;
