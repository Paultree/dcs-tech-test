package io.dcstechtest.backend.employee;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class EmployeeService {
	@Autowired
	private EmployeeRepository repository;
	
	public Employee create(EmployeeCreateDTO data) {
		String cleanedFirstName = data.getFirstName().toUpperCase();
		String cleanedMiddleName = data.getMiddleName().toUpperCase();
		String cleanedLastName = data.getLastName().toUpperCase();
		Employee newEmployee = new Employee(cleanedFirstName, cleanedMiddleName, cleanedLastName, data.getEmail(), data.getMobileNumber(), data.getAddress(), data.getIsFullTime(), data.getStartDate(), data.getEndDate(), data.getHoursPerWk());
		this.repository.save(newEmployee);
		return newEmployee;
	}
	
	public List<Employee> getAll() {
		return this.repository.findAll();
	}
	
	public Optional<Employee> getById(Long id) {
		return this.repository.findById(id);
	}
	
	public boolean delete(Long id) {
		Optional<Employee> maybeEmployee = this.getById(id);
		if (maybeEmployee.isEmpty()) {
			return false;
		}
		this.repository.delete(maybeEmployee.get());
		return true;
	}
}
