import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./EmployeeForm.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

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
  const { register, handleSubmit, errors } = useForm<Employee>({
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

  const handleChange = (e) => {
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
        <label>First Name</label>
        <input
          {...register("firstName", {
            required: true,
            pattern: /^[a-z ,.'-]+$/i,
          })}
        />
        <label>Middle Name (if applicable)</label>
        <input
          {...register("middleName", {
            pattern: /^[a-z ,.'-]+$/i,
          })}
        />
        <label>Last Name</label>
        <input
          {...register("lastName", {
            required: true,
            pattern: /^[a-z ,.'-]+$/i,
          })}
        />
      </div>
      <div className={styles.EmployeeForm_ContactDetails}>
        <h3>Contact Details</h3>
        <label>Email Address</label>
        <input
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
        />
        <label>Mobile Number</label>
        <input
          type="tel"
          {...register("mobileNumber", {
            required: true,
            pattern: /^\d{10}$/,
          })}
        />
        <label>Residential Address</label>
        <input
          className={styles.EmployeeForm_ContactDetails_Address}
          {...register("address", {
            required: true,
            pattern: /\w+(\s\w+){2,}/,
          })}
        />
      </div>
      <div className={styles.EmployeeForm_EmployeeStatus}>
        <h3>Employee Status</h3>
        <label>Contract Type</label>
        <div>
          <div>
            <input
              type="radio"
              value="permanent"
              name="contractType"
              onClick={handleChange}
              {...register("contractType", { required: true })}
            />
            Permanent
          </div>
          <div>
            <input
              type="radio"
              value="contract"
              name="contractType"
              onClick={handleChange}
              {...register("contractType", { required: true })}
            />
            Contract
          </div>
        </div>
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          {...register("startDate", { required: true })}
        />
        <label>End Date</label>
        <input
          type="date"
          name="endDate"
          hidden={isPermanent}
          {...register("endDate")}
        />
        <label>Is this on a full-time or part-time basis?</label>
        <div>
          <div>
            <input
              type="radio"
              value="fullTime"
              name="employTime"
              {...register("employTime", { required: true })}
            />
            Full Time
          </div>
          <div>
            <input
              type="radio"
              value="partTime"
              name="employTime"
              {...register("employTime", { required: true })}
            />
            Part Time
          </div>
        </div>
        <label>Hours Per Week</label>
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
