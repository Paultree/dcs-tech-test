import React from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";

const NewEmployeePage = () => {
  const navigate: void = useNavigate();

  return (
    <div>
      <h1>Employee Details</h1>
      <EmployeeForm />
    </div>
  );
};

export default NewEmployeePage;
