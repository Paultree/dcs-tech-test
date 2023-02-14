import React from "react";
import ModifyEmployeeCard from "../ModifyEmployeeCard/ModifyEmployeeCard";
import styles from "./EmployeeCard.module.scss";

const EmployeeCard = ({ data }) => {
  return (
    <div className={styles.EmployeeCard}>
      <div className={styles.EmployeeCard_Details}>
        <p>
          {data.firstName} {data.lastName}
        </p>
        <p>{data.isFullTime} - 2yrs</p>
        <p>{data.email}</p>
      </div>
      <ModifyEmployeeCard />
    </div>
  );
};

export default EmployeeCard;
