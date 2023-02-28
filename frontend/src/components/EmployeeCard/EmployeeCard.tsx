import React from "react";
import styles from "./EmployeeCard.module.scss";
import { useMutation, useQueryClient } from "react-query";
import { removeEmployee } from "../../services/api";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const EmployeeCard = ({ data }: any) => {
  const navigate = useNavigate();

  const toUpdate = () => {
    navigate(`/edit-employee/${data.id}`);
  };

  const currentYear: number = new Date().getFullYear();
  const endYear: number = new Date(data.endDate).getFullYear();
  const startYear: number = new Date(data.startDate).getFullYear();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(removeEmployee);

  const remove = async () => {
    await mutateAsync(data.id);
    queryClient.invalidateQueries("employees"); //causes list to re-render
  };

  return (
    <div className={styles.EmployeeCard}>
      <div className={styles.EmployeeCard_Details}>
        <h2>
          {data.firstName} {data.middleName.charAt(0)} {data.lastName}
        </h2>
        <h4>
          {data.contractType.charAt(0).toUpperCase() +
            data.contractType.slice(1)}{" "}
          -{" "}
          {data.endDate !== "" ? endYear - startYear : currentYear - startYear}{" "}
          years
        </h4>
        <h4>{data.email}</h4>
      </div>
      <div className={styles.EmployeeCard_Buttons}>
        <span onClick={toUpdate}>Edit</span>
        &nbsp;-&nbsp;
        <span onClick={remove}>
          {isLoading ? (
            <ThreeDots
              color="rgba(255, 255, 255, 0.87)"
              height="20"
              width="30"
            />
          ) : (
            "Remove"
          )}
        </span>
      </div>
    </div>
  );
};

export default EmployeeCard;
