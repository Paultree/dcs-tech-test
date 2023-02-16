package io.dcstechtest.backend;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import io.dcstechtest.backend.employee.Employee;
import io.dcstechtest.backend.employee.EmployeeCreateDTO;
import io.dcstechtest.backend.employee.EmployeeUpdateDTO;
import io.dcstechtest.backend.employee.EmployeeService;

@RunWith(SpringRunner.class)
@DataJpaTest
public class EmployeeServiceIntTest {
    @Autowired
    private EmployeeService employeeService;

    private EmployeeCreateDTO employee;
    private EmployeeUpdateDTO updateEmployee;

    @Before
    public void setUp() {
        employee = new EmployeeCreateDTO();
        employee.setFirstName("test");
        employee.setMiddleName("dummy");
        employee.setLastName("one");
        employee.setEmail("test@random.com");
        employee.setMobileNumber(1234567890L);
        employee.setAddress("123 random avenue");
        employee.setContractType("permanent");
        employee.setStartDate("2010-02-10");
        employee.setEndDate("2022-10-10");
        employee.setEmployTime("fullTime");
        employee.setHoursPerWk("38");

        updateEmployee = new EmployeeUpdateDTO();
        updateEmployee.setFirstName("update");
        updateEmployee.setMiddleName("");
        updateEmployee.setLastName("test");
        updateEmployee.setEmail("anotherone@live.com");
        updateEmployee.setMobileNumber(1112223334L);
        updateEmployee.setAddress("123 random street");
        updateEmployee.setContractType("contract");
        updateEmployee.setStartDate("2010-02-10");
        updateEmployee.setEndDate("2023-10-10");
        updateEmployee.setEmployTime("fullTime");
        updateEmployee.setHoursPerWk("38");
    }

    @Test
    public void testGetAllEmployees() {
        Employee savedEmployee = employeeService.create(employee);
        List<Employee> employeeList = employeeService.getAll();
        assertThat(employeeList).hasSize(1);
        assertThat(employeeList).contains(savedEmployee);
    }

	@Test
    public void testGetEmployeeById() {
		Employee savedEmployee = employeeService.create(employee);
		Optional<Employee> foundEmployee = employeeService.getById(savedEmployee.getId());
		assertTrue(foundEmployee.isPresent());
		assertEquals(savedEmployee, foundEmployee.get());
	}
	
	@Test
	public void testDeleteEmployee() {
	    Employee savedEmployee = employeeService.create(employee);
	    employeeService.delete(savedEmployee.getId());
	    Optional<Employee> foundEmployee = employeeService.getById(savedEmployee.getId());
	    assertThat(foundEmployee).isNull();
	}
}

    