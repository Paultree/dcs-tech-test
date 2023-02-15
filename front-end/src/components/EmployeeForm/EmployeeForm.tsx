import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./EmployeeForm.module.scss";

enum ContractTypeEnum {
  permanent = "permanent",
  contract = "contract",
}

enum TimeEnum {
  partTime = "part time",
  fullTime = "full time",
}

interface IFormInput {
  firstName: String;
  middleName: String;
  lastName: String;
  email: String;
  mobileNumber: number;
  address: String;
  contractType: ContractTypeEnum;
  startDate: String;
  endDate: String | null;
  employTime: TimeEnum;
  hoursPerWk: number;
}

export const EmployeeForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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
              {...register("contractType", { required: true })}
            />
            Permanent
          </div>
          <div>
            <input
              type="radio"
              value="contract"
              {...register("contractType", { required: true })}
            />
            Contract
          </div>
        </div>
        <label htmlFor="">Start Date</label>
        <input type="date" />
        <label htmlFor="">End Date</label>
        <input type="date" />
        <label>Is this on a full-time or part-time basis?</label>
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
