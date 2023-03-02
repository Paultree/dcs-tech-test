package io.dcstechtest.backend.employee;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.lang.Nullable;

public class EmployeeUpdateDTO {

	@Nullable
	@Pattern(regexp = Regex.nameRegex)
	String firstName;
	
	@Pattern(regexp = Regex.nameRegex)
	@Nullable
	String middleName;
	
	@Nullable
	@Pattern(regexp = Regex.nameRegex)
	String lastName;
	
	@Nullable
	@Pattern(regexp = Regex.emailRegex)
	String email;
	
	@Nullable
	@Pattern(regexp = Regex.numberRegex)
	String mobileNumber;
	
	@Nullable
	String address;
	
	@Nullable
	String contractType;
	
	@Nullable
    String startDate;

    @Nullable
    String endDate;
    
    @NotBlank
    String employTime;
    
    @Nullable
    @Min(3)
    @Max(38)
    String hoursPerWk;
    
    public EmployeeUpdateDTO() {
    	
    }   
    
    public EmployeeUpdateDTO(String firstName, 
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

	public String getHoursPerWk() {
		return hoursPerWk;
	}

	public void setHoursPerWk(String hoursPerWk) {
		this.hoursPerWk = hoursPerWk;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
}


