import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./EmployeeForm.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  nameRegex,
  emailRegex,
  numberRegex,
  addressRegex,
} from "../common/regex";

enum ContractTypeEnum {
  Permanent = "permanent",
  Contract = "contract",
}

enum TimeEnum {
  PartTime = "part time",
  FullTime = "full time",
}

interface Employee {
  firstName: String;
  middleName: String;
  lastName: String;
  email: String;
  mobileNumber: number;
  address: String;
  contractType: ContractTypeEnum;
  startDate: String;
  endDate: String;
  employTime: TimeEnum;
  hoursPerWk: number;
}

const createEmployee = async (data: Employee) => {
  const { data: response } = await axios.post(
    "http://localhost:8080/employee",
    data
  );
  return response.data;
};

export const EmployeeForm = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const currentDate = new Date();

  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>({
    mode: "onChange",
  });

  const { mutate, isLoading } = useMutation(createEmployee, {
    onSuccess: (data) => {
      const message = "success";
      alert(message);
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const onSubmit = (data: Employee) => {
    const employee = {
      ...data,
    };
    mutate(employee);
    handleNavigate();
  };

  const [isPermanent, setIsPermanent] = useState(true);

  const handleChange = (e: any) => {
    if (e.target.name !== "contractType") {
      return;
    }
    if (e.target.value === "permanent") {
      setIsPermanent(true);
    } else {
      setIsPermanent(false);
    }
  };

  return (
    <form className={styles.EmployeeForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.EmployeeForm_PersonalDetails}>
        <h3>Personal Information</h3>
        <label htmlFor="firstName">
          First Name:{" "}
          <span className={styles.ErrorMessage}>
            {errors.firstName && "Required or Invalid!"}
          </span>
        </label>
        <input
          id="firstName"
          {...register("firstName", {
            required: true,
            pattern: nameRegex,
          })}
        />
        <label htmlFor="middleName">
          Middle Name (if applicable):
          <span className={styles.ErrorMessage}>
            {errors.middleName && "Invalid!"}
          </span>
        </label>
        <input
          id="middleName"
          {...register("middleName", {
            pattern: nameRegex,
          })}
        />
        <label>
          Last Name:{" "}
          <span className={styles.ErrorMessage}>
            {errors.lastName && "Required or Invalid!"}
          </span>
        </label>
        <input
          {...register("lastName", {
            required: true,
            pattern: nameRegex,
          })}
        />
      </div>
      <div className={styles.EmployeeForm_ContactDetails}>
        <h3>Contact Details</h3>
        <label>
          Email Address:{" "}
          <span className={styles.ErrorMessage}>
            {errors.email && "Required or Invalid!"}
          </span>
        </label>
        <input
          {...register("email", {
            required: true,
            pattern: emailRegex,
          })}
        />

        <label>
          Mobile Number:{" "}
          <span className={styles.ErrorMessage}>
            {errors.mobileNumber && "Required or Invalid!"}
          </span>
        </label>
        <input
          type="tel"
          {...register("mobileNumber", {
            required: true,
            pattern: numberRegex,
          })}
        />
        <label>
          Residential Address:{" "}
          <span className={styles.ErrorMessage}>
            {errors.address && "Required or Invalid!"}
          </span>
        </label>
        <input
          className={styles.EmployeeForm_ContactDetails_Address}
          {...register("address", {
            required: true,
            pattern: addressRegex,
          })}
        />
      </div>
      <div className={styles.EmployeeForm_EmployeeStatus}>
        <h3>Employee Status</h3>
        <label htmlFor="contractType">
          Contract Type:{" "}
          <span className={styles.ErrorMessage}>
            {errors.contractType && "Required or Invalid!"}
          </span>
        </label>
        <div>
          <div>
            <input
              id="contractType"
              type="radio"
              value="permanent"
              onClick={handleChange}
              {...register("contractType", { required: true })}
            />
            Permanent
          </div>
          <div>
            <input
              id="contractType"
              type="radio"
              value="contract"
              onClick={handleChange}
              {...register("contractType", { required: true })}
            />
            Contract
          </div>
        </div>
        <label>Start Date: {errors.startDate && "Required or Invalid!"}</label>
        <input type="date" {...register("startDate", { required: true })} />
        <label hidden={isPermanent}>
          End Date: <span>{errors.endDate && "Invalid!"}</span>
        </label>
        <input type="date" hidden={isPermanent} {...register("endDate")} />
        <label>
          Is this on a full-time or part-time basis?{" "}
          <span className={styles.ErrorMessage}>
            {errors.employTime && "Required or Invalid!"}
          </span>
        </label>
        <div>
          <div>
            <input
              type="radio"
              value="fullTime"
              {...register("employTime", { required: true })}
            />
            Full Time
          </div>
          <div>
            <input
              type="radio"
              value="partTime"
              {...register("employTime", { required: true })}
            />
            Part Time
          </div>
        </div>
        <label>
          Hours Per Week:{" "}
          <span className={styles.ErrorMessage}>
            {errors.hoursPerWk && "Required or Invalid!"}
          </span>
        </label>
        <input
          className={styles.EmployeeForm_EmployeeStatus_Hours}
          {...register("hoursPerWk", { required: true, min: 3, max: 38 })}
        />
        <input type="submit" />
      </div>
    </form>
  );
};

export default EmployeeForm;
