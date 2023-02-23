import React from "react";
import { NavLink, useParams, Link } from "react-router-dom";
import { useMutation } from "react-query";
import styles from "./ModifyEmployeeCard.module.scss";

const ModifyEmployeeCard = ({ handleDelete, id }) => {
  return (
    <div className={styles.ModifyEmployeeCard}>
      <Link to={`/modify/${id}`}>
        <span>Edit</span>
      </Link>
      &nbsp;|&nbsp;
      <span onClick={handleDelete}>Remove</span>
    </div>
  );
};

export default ModifyEmployeeCard;
