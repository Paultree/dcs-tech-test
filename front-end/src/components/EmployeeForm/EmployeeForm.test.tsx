import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import EmployeeForm from "./EmployeeForm";

describe("EmployeeForm", () => {
  it("should display labels", () => {
    render(<EmployeeForm />);
    const firstNameLabel = screen.getByText(/First Name:/i);
    expect(firstNameLabel).toBeInTheDocument();
  });

  it("should display input field", () => {
    render(<EmployeeForm />);
    const input = screen.getByRole("input", { name: "firstName" });
    expect(input).toHaveAttribute("type", "string");
  });

  it("should validate required fields correctly", async () => {
    render(<EmployeeForm />);
    const requiredField = screen.getByRole("input", { name: "contractType" });
    expect(requiredField).toBeInvalid();
  });
});
