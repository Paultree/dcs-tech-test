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
  startDate: LocalDate;
  endDate: LocalDate | null;
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
        <input {...register("firstName")} />
        <label>Middle Name (if applicable)</label>
        <input {...register("middleName")} />
        <label>Last Name</label>
        <input {...register("lastName")} />
      </div>
      <div className={styles.EmployeeForm_ContactDetails}>
        <h3>Contact Details</h3>
        <label>Email Address</label>
        <input {...register("email")} />
        <label>Mobile Number</label>
        <input {...register("mobileNumber")} />
        <label>Residential Address</label>
        <input
          className={styles.EmployeeForm_ContactDetails_Address}
          {...register("address")}
        />
      </div>
      <div className={styles.EmployeeForm_EmployeeStatus}>
        <h3>Employee Status</h3>
        <label>Contract Type</label>
        <div {...register("contractType")}>
          <div>
            <input type="radio" value="permanent" />
            Permanent
          </div>
          <div>
            <input type="radio" value="contract" />
            Contract
          </div>
        </div>
        <label htmlFor="">Start Date</label>
        <input type="date" />
        <label htmlFor="">End Date</label>
        <input type="date" />
        <label>Is this on a full-time or part-time basis?</label>
        <div {...register("employTime")}>
          <div>
            <input type="radio" value="full time" />
            Full Time
          </div>
          <div>
            <input type="radio" value="part time" />
            Part Time
          </div>
        </div>
        <label>Hours Per Week</label>
        <input
          className={styles.EmployeeForm_EmployeeStatus_Hours}
          {...register("hoursPerWk")}
        />
        <input type="submit" />
      </div>
    </form>
  );
};

export default EmployeeForm;
