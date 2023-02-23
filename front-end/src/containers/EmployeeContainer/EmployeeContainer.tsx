import React from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import styles from "./EmployeeContainer.module.scss";
import { useNavigate } from "react-router-dom";
import { useGetAllEmployees } from "../../components/hooks/getAllEmployeesQuery";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import axios from "axios";

type Employee = {
  id: number;
  firstName: String;
  middleName: String;
  lastName: String;
  email: String;
  mobileNumber: number;
  address: String;
  contractType: String;
  startDate: String;
  endDate: String;
  employTime: String;
  hoursPerWk: number;
};

const EmployeeContainer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new");
  };

  const { data, isLoading } = useGetAllEmployees();

  const deleteEmployee = useMutation((id) => {
    return axios.delete(`http://localhost:8080/employee/${id}`);
  });

  return (
    <div className={styles.EmployeeContainer}>
      <h1>Employees List</h1>
      <div className={styles.EmployeeContainer_Header}>
        <p>Please click on 'Edit' to find more details of each employee.</p>

        <button onClick={handleClick}>Add employee</button>
      </div>
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) : data ? (
          data.map((employee: Employee, key: number) => {
            return (
              <EmployeeCard
                data={employee}
                key={key}
                handleDelete={() => {
                  deleteEmployee.mutate(employee.id);
                }}
              />
            );
          })
        ) : (
          <p>An error has occurred.</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeContainer;
