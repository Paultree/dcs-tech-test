import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { deleteEmployeeById } from "../hooks/getAllEmployeesQuery";
import { useMutation } from "react-query";

const ModifyEmployeeCard = ({ id, handleDelete }) => {
  return (
    <div>
      <NavLink to="/edit">
        <span>Edit</span>
      </NavLink>
      &nbsp;|&nbsp;
      <span onClick={handleDelete}>Remove</span>
    </div>
  );
};

export default ModifyEmployeeCard;
