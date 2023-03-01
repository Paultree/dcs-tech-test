import axios from "axios";
import { Employee } from "./employee";

const url: string = "http://localhost:8080/employee";

export const getAllEmployees = async () => {
  const response = await axios.get(url);

  if (!response) {
    throw new Error("Something went wrong. Unable to retrieve data.");
  }

  return response.data;
};

export const getEmployee = async ({ queryKey }: any) => {
  /* eslint-disable no-unused-vars */
  const [_key, { id }] = queryKey;
  const response = await axios.get(`${url}/${id}`);

  if (!response) {
    throw new Error("Something went wrong. Unable to retrieve employee data.");
  }

  return response.data;
};

export const createEmployee = async (data: Employee) => {
  const response = await axios.post(`${url}`, data);

  if (!response) {
    throw new Error("Something went wrong. Unable to create employee.");
  }

  return response.data;
};
export const updateEmployee = async ({ id, ...data }: any) => {
  const response = await axios.put(`${url}/${id}`, data);

  if (!response) {
    throw new Error("Something went wrong. Unable to update employee.");
  }

  return response.data;
};

export const removeEmployee = async (id: number) => {
  const response = await axios.delete(`${url}/${id}`);

  if (!response) {
    throw new Error("Something went wrong. Unable to delete employee.");
  }

  return true;
};
