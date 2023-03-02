import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EmployeeForm from "./EmployeeForm";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const labelsArr = [
  /first name:/i,
  /middle name - if applicable:/i,
  /last name:/i,
  /email address:/i,
  /mobile number:/i,
  /residential address:/i,
  /contract type:/i,
  /start date:/i,
  /end date:/i,
  /is this on a full-time or part-time basis?/i,
  /hours per week:/i,
];

describe("EmployeeForm", () => {
  it("should render correctly", () => {
    render(<EmployeeForm />);

    screen.debug();
  });

  it("should display labels correctly", () => {
    render(<EmployeeForm />);

    for (let label of labelsArr) {
      const testLabel = screen.getByText(label);
      expect(testLabel).toBeInTheDocument();
    }
  });
});
