import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EmployeeCard from "./EmployeeCard";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const mock = {
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

describe("EmployeeCard", () => {
  const queryClient = new QueryClient();
  it("should render correctly", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EmployeeCard data={mock} />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    screen.debug();
  });

  it("should display the correct name", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EmployeeCard data={mock} />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    const nameElement = screen.queryByText(/Test F Fraud/i);
    expect(nameElement).toBeVisible();
  });

  it("should display the correct contract type and duration", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EmployeeCard data={mock} />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    const contractElement = screen.queryByText(/permanent - 13 years/i);
    expect(contractElement).toBeVisible();
  });

  it("should display the correct address", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EmployeeCard data={mock} />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    const emailElement = screen.queryByText(/testmail1@gmail.com/i);
    expect(emailElement).toBeVisible();
  });
});
