import React from "react";
import styles from "./EmployeeCard.module.scss";

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

const EmployeeCard = ({ data }: any) => {
  return (
    <div className={styles.EmployeeCard}>
      <div className={styles.EmployeeCard_Details}>
        <h2>
          {data.firstName} {data.middleName.charAt(0)}. {data.lastName}
        </h2>
        <h4>Employment type - Duration of service</h4>
        <h4>Email Address</h4>
      </div>
      <div> Modify/Delete component goes here!</div>
    </div>
  );
};

export default EmployeeCard;
