import axios from "axios";
import { useQuery } from "react-query";

const allEmployeeUrl: String = "http://localhost:8080/employee";

const getAllEmployees = async () => {
  const response: Promise = await axios.get(allEmployeeUrl);
  return response.data;
};

export const UseGetAllEmployees = () => {
  const { isLoading, data } = useQuery(["allEmployees"], getAllEmployees);
  return { data, isLoading };
};
