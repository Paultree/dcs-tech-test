import React from "react";
import styles from "./EmployeeListPage.module.scss";
import { useQuery } from "react-query";
import { getAllEmployees } from "../../services/api";
import { ThreeDots } from "react-loader-spinner";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { useNavigate } from "react-router-dom";

interface Employee {
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
  hoursPerWk: String;
}

const EmployeeListPage = () => {
  const navigate = useNavigate();

  const toAdd = () => {
    navigate("/add-employee");
  };

  const { data, error, isLoading, isError }: any = useQuery(
    "employees",
    getAllEmployees
  );

  if (isLoading) {
    return (
      <div className={styles.EmployeeListPage}>
        <div className={styles.EmployeeListPage_Header}>
          <h1>Employees List</h1>
        </div>
        <div className={styles.EmployeeListPage_List}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="rgba(255, 255, 255, 0.87)"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.EmployeeListPage}>
        <div className={styles.EmployeeListPage_Header}>
          <h1>Employees List</h1>
        </div>
        <div className={styles.EmployeeListPage_List}>
          Error: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.EmployeeListPage}>
      <div className={styles.EmployeeListPage_Header}>
        <h1>Employees List</h1>
      </div>
      <div className={styles.EmployeeListPage_New}>
        <p>Click 'Add New Employee' to add a new employee.</p>
        <button onClick={toAdd}>Add New Employee</button>
      </div>
      <div className={styles.EmployeeListPage_List}>
        {data.map((employee: Employee, id: number) => {
          return <EmployeeCard data={employee} key={id} />;
        })}
      </div>
    </div>
  );
};

export default EmployeeListPage;
