import React from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getEmployee } from "../../services/api";
import styles from "./UpdateEmployeePage.module.scss";
import { ThreeDots } from "react-loader-spinner";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import { updateEmployee } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Employee } from "../../services/employee";

const UpdateEmployeePage = () => {
  const navigate = useNavigate();

  const toHome: () => void = () => {
    navigate("/");
  };

  const { id } = useParams();

  const { data, error, isLoading, isError }: any = useQuery(
    ["employee", { id }],
    getEmployee
  );

  const { mutateAsync, isLoading: isMutating } = useMutation(updateEmployee);
  const onFormSubmit = async (data: Employee) => {
    await mutateAsync({ ...data, id });
    toHome();
  };

  return (
    <div className={styles.UpdateEmployeePage}>
      <div className={styles.UpdateEmployeePage_Header}>
        <p onClick={toHome}>&#60; Back</p>
        <h1>Update Employee</h1>
      </div>
      <div className={styles.UpdateEmployeePage_Form}>
        {isLoading ? (
          <ThreeDots color="rgba(255, 255, 255, 0.87)" />
        ) : isError ? (
          <span>Error:{error.message}</span>
        ) : (
          <EmployeeForm
            defaultValues={data}
            onFormSubmit={onFormSubmit}
            isLoading={isMutating}
          />
        )}
      </div>
    </div>
  );
};

export default UpdateEmployeePage;
