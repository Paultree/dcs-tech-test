import React from "react";
import { NavLink, useParams } from "react-router-dom";

const ModifyEmployeeCard = () => {
  const { id } = useParams();

  return (
    <div>
      <NavLink to="/edit">
        <span>Edit</span>
      </NavLink>
      |<span>Remove</span>
    </div>
  );
};

export default ModifyEmployeeCard;
