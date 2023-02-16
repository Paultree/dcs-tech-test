import axios from "axios";
import { useQuery, useMutation } from "react-query";

const allEmployeeUrl: String = "http://localhost:8080/employee";

export const getAllEmployees = async () => {
  const response: Promise = await axios.get(allEmployeeUrl);
  return response.data;
};

export const useGetAllEmployees = () => {
  const { isLoading, data } = useQuery(["allEmployees"], getAllEmployees);
  return { data, isLoading };
};
