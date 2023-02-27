import { useQuery } from "react-query";
import axios from "axios";

const apiUrl: string = "http://localhost:8080/employee";

export const getAllEmployees = async () => {
  const response = await axios.get(apiUrl);

  if (!response) {
    throw new Error("Something went wrong.");
  }

  return response.data;
};
