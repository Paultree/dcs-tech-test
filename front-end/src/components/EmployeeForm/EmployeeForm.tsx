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
            pattern: nameRegex,
          })}
        />
        {errors.firstName && "First name is missing/invalid."}
        <label>Middle Name (if applicable)</label>
        <input
          {...register("middleName", {
            pattern: nameRegex,
          })}
        />
        {errors.middleName && "Middle name is invalid."}
        <label>Last Name</label>
        <input
          {...register("lastName", {
            required: true,
            pattern: nameRegex,
          })}
        />
        {errors.lastName && "Last name is missing/invalid."}
      </div>
      <div className={styles.EmployeeForm_ContactDetails}>
        <h3>Contact Details</h3>
        <label>Email Address</label>
        <input
          {...register("email", {
            required: true,
            pattern: emailRegex,
          })}
        />
        {errors.email && "Email address is missing/invalid."}
        <label>Mobile Number</label>
        <input
          type="tel"
          {...register("mobileNumber", {
            required: true,
            pattern: numberRegex,
          })}
        />
        {errors.mobileNumber && "Mobile number is missing/invalid."}
        <label>Residential Address</label>
        <input
          className={styles.EmployeeForm_ContactDetails_Address}
          {...register("address", {
            required: true,
            pattern: addressRegex,
          })}
        />
        {errors.address && "Address is missing/invalid."}
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
          {errors.contractType && "Contract type required to be selected."}
        </div>
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          {...register("startDate", { required: true })}
        />
        {errors.startDate && "Start date required."}
        <label>End Date</label>
        <input
          type="date"
          name="endDate"
          hidden={isPermanent}
          {...register("endDate")}
        />
        {errors.endDate && "End date invalid."}
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
          {errors.employTime && "Employment type required."}
        </div>
        <label>Hours Per Week</label>
        <input
          className={styles.EmployeeForm_EmployeeStatus_Hours}
          {...register("hoursPerWk", { required: true, min: 3, max: 38 })}
        />
        {errors.hoursPerWk && "Hours per week missing/invalid."}
        <input type="submit" />
      </div>
    </form>
  );
};

export default EmployeeForm;
