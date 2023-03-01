import {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  removeEmployee,
} from "./api";
import { beforeEach, describe, expect, test, vi } from "vitest";
import axios from "axios";

const mockData = {
  firstName: "Test",
  middleName: "Fake",
  lastName: "Fraud",
  email: "testmail1@gmail.com",
  mobileNumber: "0123456789",
  address: "1 fake street",
  contractType: "permanent",
  startDate: "2010-01-16",
  endDate: "",
  employTime: "fullTime",
  hoursPerWk: "38",
};

vi.mock("axios");

describe("api calls", () => {
  beforeEach(() => {
    axios.get.mockReset();
    axios.post.mockReset();
  });

  describe("getAllEmployees", () => {
    test("makes a GET request to fetch employees", async () => {
      axios.get.mockResolvedValue({
        data: mockData,
      });

      const employees = await getAllEmployees();

      expect(axios.get).toHaveBeenCalledWith("http://localhost:8080/employee");
      expect(employees).toStrictEqual(mockData);
    });
  });

  describe("createEmployee", () => {
    test("makes a POST request to create a new employee", async () => {
      axios.post.mockResolvedValue({
        data: mockData,
      });

      const newEmployee = await createEmployee(mockData);

      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:8080/employee",
        mockData
      );
      expect(newEmployee).toStrictEqual(mockData);
    });
  });
});
