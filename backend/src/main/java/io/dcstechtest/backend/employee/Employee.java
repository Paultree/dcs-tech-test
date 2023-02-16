package io.dcstechtest.backend.employee;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String firstName;
	
	@Column
	private String middleName;
	
	@Column
	private String lastName;
	
	@Column
	private String email;
	
	@Column
	private Long mobileNumber;
	
	@Column
	private String address;
	
	@Column
	private String contractType;
	
	@Column
   	private LocalDate startDate;

    	@Column
    	private LocalDate endDate;
    
    	@Column
    	private String employTime;
    
    	@Column
	private Byte hoursPerWk;
	
    	public Employee() {
    	
    	}
    
    	public Employee(String firstName, 
    		String middleName, 
    		String lastName, 
    		String email, 
    		Long mobileNumber,
    		String address, 
    		String contractType, 
    		LocalDate startDate, 
    		LocalDate endDate, 
    		String employTime,
    		Byte hoursPerWk) {
    	this.firstName = firstName;
    	this.middleName = middleName;
    	this.lastName = lastName;
    	this.email = email;
    	this.mobileNumber = mobileNumber;
    	this.address = address;
    	this.contractType = contractType;
    	this.startDate = startDate;
    	this.endDate = endDate;
    	this.employTime = employTime;
    	this.hoursPerWk = hoursPerWk;
    	}
    
    	public Long getId() {
        	return id;
    	}
    
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContractType() {
		return contractType;
	}

	public void setContractType(String contractType) {
		this.contractType = contractType;
	}

	public String getEmployTime() {
		return employTime;
	}

	public void setEmployTime(String employTime) {
		this.employTime = employTime;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public Byte getHoursPerWk() {
		return hoursPerWk;
	}

	public void setHoursPerWk(Byte hoursPerWk) {
		this.hoursPerWk = hoursPerWk;
	}

	
	
	
}
