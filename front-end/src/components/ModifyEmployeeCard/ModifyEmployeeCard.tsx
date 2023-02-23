import React from "react";
import { NavLink, useParams, Link } from "react-router-dom";
import { useMutation } from "react-query";
import styles from "./ModifyEmployeeCard.module.scss";

const ModifyEmployeeCard = ({ handleDelete, id }) => {
  return (
    <div>
      <Link to={`/modify/${id}`}>
        <span className={styles.ModifyButton}>Edit</span>
      </Link>
      &nbsp;|&nbsp;
      <span className={styles.ModifyButton} onClick={handleDelete}>
        Remove
      </span>
    </div>
  );
};

export default ModifyEmployeeCard;
