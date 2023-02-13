import React from "react";
import ModifyEmployeeCard from "../ModifyEmployeeCard/ModifyEmployeeCard";
import styles from "./EmployeeCard.module.scss";

const EmployeeCard = () => {
  return (
    <div className={styles.EmployeeCard}>
      <div className={styles.EmployeeCard_Details}>
        <p>John Smith</p>
        <p>Contract - 2yrs</p>
        <p>John.smith@email.com</p>
      </div>
      <ModifyEmployeeCard />
    </div>
  );
};

export default EmployeeCard;
