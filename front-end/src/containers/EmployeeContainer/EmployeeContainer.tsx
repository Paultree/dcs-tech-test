import React from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import styles from "./EmployeeContainer.module.scss";
import { useNavigate } from "react-router-dom";
import { UseGetAllEmployees } from "../../components/hooks/getAllEmployeesQuery";

const EmployeeContainer = () => {
  const navigate: void = useNavigate();

  const handleClick: void = () => {
    navigate("/new");
  };

  const { data, isLoading } = UseGetAllEmployees();

  return (
    <div className={styles.EmployeeContainer}>
      <h1>Employee's List</h1>
      <div>
        <p>Please click on 'Edit' to find more details of each employee.</p>

        <button onClick={handleClick}>Add employee</button>
      </div>
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) : data ? (
          data.map((employee, key) => {
            return <EmployeeCard data={employee} key={key} />;
          })
        ) : (
          <p>Whoops</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeContainer;
