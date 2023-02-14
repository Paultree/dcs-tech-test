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
  gender: GenderEnum;
  emailAddress: String;
  mobileNumber: number;
  address: String;
}

export const EmployeeForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
};

export default EmployeeForm;
