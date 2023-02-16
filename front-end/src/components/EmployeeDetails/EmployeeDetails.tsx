import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./EmployeeDetails.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
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

export const EmployeeDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const updateEmployee = async (data: Employee) => {
    const { data: response } = await axios.put(
      `http://localhost:8080/employee/${id}`,
      data
    );
    return response.data;
  };

  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
    contractType: "",
    startDate: "",
    endDate: "",
    employTime: "",
    hoursPerWk: "",
  });

  useEffect(() => {
    const getEmployee = async () => {
      const response = await axios.get(`http://localhost:8080/employee/${id}`);
      setFormData(response.data);
      reset(response.data);
    };
    getEmployee();
  }, [id]);

  const currentDate = new Date();

  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Employee>({
    mode: "onChange",
    defaultValues: formData,
  });

  const { mutate, isLoading } = useMutation(updateEmployee, {
    onSuccess: (formData) => {
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

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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

  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <div className={styles.EmployeeDetails_Header}>
        <p>
          &lt;&nbsp;<span onClick={handleClick}>Back</span>
        </p>
        <h1>Employee Details</h1>
      </div>
      <form
        className={styles.EmployeeDetails}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.EmployeeDetails_PersonalDetails}>
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
        <div className={styles.EmployeeDetails_ContactDetails}>
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
            defaultValue={formData.address}
            onChange={handleInputChange}
            className={styles.EmployeeDetails_ContactDetails_Address}
            {...register("address", {
              required: true,
              pattern: addressRegex,
            })}
          />
          {errors.address && "Address is missing/invalid."}
        </div>
        <div className={styles.EmployeeDetails_EmployeeStatus}>
          <h3>Employee Status</h3>
          <label>Contract Type</label>
          <div>
            <div>
              <input
                defaultChecked={formData.contractType == "Permanent"}
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
                defaultChecked={formData.contractType == "Contract"}
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
            defaultValue={formData.startDate}
            {...register("startDate", { required: true })}
          />
          {errors.startDate && "Start date required."}
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            defaultValue={formData.endDate ? formData.endDate : ""}
            hidden={isPermanent}
            {...register("endDate")}
          />
          {errors.endDate && "End date invalid."}
          <label>Is this on a full-time or part-time basis?</label>
          <div>
            <div>
              <input
                defaultChecked={formData.employTime === "FullTime"}
                type="radio"
                value="fullTime"
                name="employTime"
                {...register("employTime", { required: true })}
              />
              Full Time
            </div>
            <div>
              <input
                defaultChecked={formData.employTime === "PartTime"}
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
    </div>
  );
};
export default EmployeeDetails;
