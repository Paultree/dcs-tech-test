import React from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import styles from "./EmployeeContainer.module.scss";
import { useNavigate } from "react-router-dom";
import { UseGetAllEmployees } from "../../components/hooks/getAllEmployeesQuery";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import axios from "axios";

const EmployeeContainer = () => {
  const navigate: void = useNavigate();

  const handleClick: void = () => {
    navigate("/new");
  };

  const { data, isLoading } = UseGetAllEmployees();

  const deleteEmployee = useMutation((id) => {
    return axios.delete(`http://localhost:8080/employee/${id}`);
  });

  return (
    <div className={styles.EmployeeContainer}>
      <h1>Employee's List</h1>
      <div className={styles.EmployeeContainer_Header}>
        <p>Please click on 'Edit' to find more details of each employee.</p>

        <button onClick={handleClick}>Add employee</button>
      </div>
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) : data ? (
          data.map((employee, key) => {
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
