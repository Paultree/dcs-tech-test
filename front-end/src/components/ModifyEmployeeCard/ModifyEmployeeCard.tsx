import React from "react";
import { NavLink, useParams, Link } from "react-router-dom";
import { deleteEmployeeById } from "../hooks/getAllEmployeesQuery";
import { useMutation } from "react-query";

const ModifyEmployeeCard = ({ handleDelete, handleModify, id }) => {
  return (
    <div>
      <Link to={`/modify/${id}`}>
        <span>Edit</span>
      </Link>
      &nbsp;|&nbsp;
      <span onClick={handleDelete}>Remove</span>
    </div>
  );
};

export default ModifyEmployeeCard;
