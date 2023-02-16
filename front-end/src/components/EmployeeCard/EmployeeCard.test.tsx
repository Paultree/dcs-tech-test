import { describe, it, expect } from "vitest";
import EmployeeCard from "./EmployeeCard";
import { render, screen } from "@testing-library/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  MemoryRouter,
} from "react-router-dom";

const mockEmployee = {
  id: 12,
  firstName: "TEST",
  middleName: "",
  lastName: "MAN",
  email: "nomore123@gmail.com",
  mobileNumber: 1234567890,
  address: "1 residential street",
  contractType: "permanent",
  startDate: "2010-01-16",
  endDate: "",
  employTime: "fullTime",
  hoursPerWk: 38,
};

describe("EmployeeCard", () => {
  it("should display a full name based on props", () => {
    render(<EmployeeCard data={mockEmployee} />, { wrapper: MemoryRouter });
    const name = screen.getByText(/test man/i);
    expect(name).toBeInTheDocument();
  });
  it("should display a contract type followed by years active based on props", () => {
    render(<EmployeeCard data={mockEmployee} />, { wrapper: MemoryRouter });
    const employment = screen.getByText(/permanent - 13 years/i);
    expect(employment).toBeInTheDocument();
  });
  it("should display a contract type followed by years active based on props", () => {
    render(<EmployeeCard data={mockEmployee} />, { wrapper: MemoryRouter });
    const email = screen.getByText(/nomore123@gmail.com/i);
    expect(email).toBeInTheDocument();
  });
});
