import React from "react";
import ModifyEmployeeCard from "../ModifyEmployeeCard/ModifyEmployeeCard";
import styles from "./EmployeeCard.module.scss";

const EmployeeCard = ({ handleDelete, data }) => {
  const currentYear: number = new Date().getFullYear();
  const startYear: number = new Date(data.startDate).getFullYear();

  return (
    <div className={styles.EmployeeCard}>
      <div className={styles.EmployeeCard_Details}>
        <p>
          {data.firstName} {data.middleName} {data.lastName}
        </p>
        <p>
          {data.contractType.toUpperCase()} - {currentYear - startYear} years
        </p>
        <p>{data.email}</p>
      </div>
      <ModifyEmployeeCard id={data.id} handleDelete={handleDelete} />
    </div>
  );
};

export default EmployeeCard;
