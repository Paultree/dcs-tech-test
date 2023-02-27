package io.dcstechtest.backend.employee;

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
	private String mobileNumber;
	
	@Column
	private String address;
	
	@Column
	private String contractType;
	
	@Column
   	private String startDate;

		@Column
    	private String endDate;
    
    	@Column
    	private String employTime;
    
    	@Column
    	private String hoursPerWk;
	
    	public Employee() {
    	
    	}
    
    	public Employee(String firstName, 
    		String middleName, 
    		String lastName, 
    		String email, 
    		String mobileNumber,
    		String address, 
    		String contractType, 
    		String startDate, 
    		String endDate, 
    		String employTime,
    		String hoursPerWk) {
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

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
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

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getHoursPerWk() {
		return hoursPerWk;
	}

	public void setHoursPerWk(String hoursPerWk) {
		this.hoursPerWk = hoursPerWk;
	}

	
	
	
}
