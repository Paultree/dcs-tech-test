import React from "react";
import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";
import styles from "./EmployeeForm.module.scss";
import {
  nameRegex,
  emailRegex,
  numberRegex,
  addressRegex,
} from "../../services/regex";

const EmployeeForm = ({ defaultValues, onFormSubmit, isLoading }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    onFormSubmit(data);
  });

  return (
    <form className={styles.EmployeeForm} onSubmit={onSubmit}>
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
              {...register("contractType", { required: true })}
            />
            Permanent
          </div>
          <div>
            <input
              id="contractType"
              type="radio"
              value="contract"
              {...register("contractType", { required: true })}
            />
            Contract
          </div>
        </div>
        <label>Start Date: {errors.startDate && "Required or Invalid!"}</label>
        <input type="date" {...register("startDate", { required: true })} />
        <label>
          End Date: <span>{errors.endDate && "Invalid!"}</span>
        </label>
        <input type="date" {...register("endDate")} />
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
        <button>
          {isLoading ? (
            <ThreeDots color="rgba(255, 255, 255, 0.87)" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
