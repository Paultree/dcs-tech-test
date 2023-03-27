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

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("api call methods", () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
    mockedAxios.post.mockReset();
  });

  describe("getAllEmployees", () => {
    test("makes a GET request to fetch employees", async () => {
      mockedAxios.get.mockResolvedValue({
        data: mockData,
      });

      const employees = await getAllEmployees();

      expect(mockedAxios.get).toHaveBeenCalledWith(
        "http://localhost:8080/employee"
      );
      expect(employees).toStrictEqual(mockData);
    });
  });

  describe("createEmployee", () => {
    test("makes a POST request to create a new employee", async () => {
      mockedAxios.post.mockResolvedValue({
        data: mockData,
      });

      const newEmployee = await createEmployee(mockData);

      expect(mockedAxios.post).toHaveBeenCalledWith(
        "http://localhost:8080/employee",
        mockData
      );
      expect(newEmployee).toStrictEqual(mockData);
    });
  });

  describe("removeEmployee", () => {
    test("makes a DELETE request to delete an employee by ID", async () => {
      mockedAxios.delete.mockResolvedValue(true);

      await removeEmployee(2);

      expect(mockedAxios.delete).toHaveBeenCalledWith(
        "http://localhost:8080/employee/2"
      );
    });
  });

  describe("getEmployee", () => {
    const mockEmployee = {
      id: 2,
      ...mockData,
    };

    test("makes a GET request to retrieve a single employee by ID", async () => {
      mockedAxios.get.mockResolvedValue({
        data: mockData,
      });

      const employee = await getEmployee({ queryKey: ["employee", { id: 2 }] });

      expect(mockedAxios.get).toHaveBeenCalledWith(
        "http://localhost:8080/employee/2"
      );
      expect(employee).toStrictEqual(mockData);
    });
  });

  describe("updateEmployee", () => {
    test("makes a PUT request to update employee information", async () => {
      const newData = {
        firstName: "Paul",
      };

      const update = {
        id: 2,
        ...newData,
      };

      mockedAxios.put.mockResolvedValue({
        data: { ...mockData, ...update },
      });

      const updatedEmployee = await updateEmployee(update);

      expect(mockedAxios.put).toHaveBeenCalledWith(
        "http://localhost:8080/employee/2",
        newData
      );
      expect(updatedEmployee).toStrictEqual({ ...mockData, ...update });
    });
  });
});
