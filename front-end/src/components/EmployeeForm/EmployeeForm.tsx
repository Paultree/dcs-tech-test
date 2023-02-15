import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Middle Name</label>
      <input {...register("middleName")} />
      <label>Last Name</label>
      <input {...register("lastName")} />
      <label>Email Address</label>
      <input {...register("email")} />
      <label>Mobile Number</label>
      <input {...register("mobileNumber")} />
      <label>Residential Address</label>
      <input {...register("address")} />
      <label>Contract Type</label>
      <div {...register("contractType")}>
        <input type="radio" value="permanent" />
        Permanent
        <input type="radio" value="contract" />
        Contract
      </div>
      <label htmlFor="">Start Date</label>
      <input type="date" />
      <label htmlFor="">End Date</label>
      <input type="date" />
      <label>Is this on a full-time or part-time basis?</label>
      <div {...register("employTime")}>
        <input type="radio" value="full time" />
        Full Time
        <input type="radio" value="part time" />
        Part Time
      </div>
      <label>Hours Per Week</label>
      <input {...register("hoursPerWk")} />
      <input type="submit" />
    </form>
  );
};

export default EmployeeForm;
