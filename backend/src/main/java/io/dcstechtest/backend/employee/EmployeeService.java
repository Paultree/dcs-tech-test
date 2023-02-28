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
		Employee newEmployee = new Employee(cleanedFirstName, 
				cleanedMiddleName, 
				cleanedLastName, 
				data.getEmail(), 
				data.getMobileNumber(),
				data.getAddress(), 
				data.getContractType(), 
				data.getStartDate(), 
				data.getEndDate(), 
				data.getEmployTime(),
				data.getHoursPerWk());
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
	
	@SuppressWarnings("null")
	public Employee update(Long jobId, EmployeeUpdateDTO data, Employee employee) {
        if (data.firstName != null) {
            employee.setFirstName(data.firstName.toUpperCase().trim());
        }
        
        if (data.middleName != null) {
            employee.setMiddleName(data.middleName.toUpperCase().trim());
        }
        
        if (data.lastName != null) {
            employee.setLastName(data.lastName.toUpperCase().trim());
        }

        if (data.email != null) {
            employee.setEmail(data.email);
        }
        
        if (data.mobileNumber != null) {
            employee.setMobileNumber(data.mobileNumber);
        }
        
        if (data.address != null) {
            employee.setAddress(data.address);
        }
        
        if (data.contractType != null) {
            employee.setContractType(data.contractType);
        }
        
        if (data.startDate != null) {
            employee.setStartDate(data.startDate);
        }

        if (data.endDate != null) {
            employee.setEndDate(data.endDate);
        }

        if (data.employTime != null) {
            employee.setEmployTime(data.employTime);
        }
        
        if (data.hoursPerWk != null) {
            employee.setHoursPerWk(data.hoursPerWk);
        }
        
        return this.repository.save(employee);
    }
}
