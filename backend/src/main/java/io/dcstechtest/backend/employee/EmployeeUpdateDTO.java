package io.dcstechtest.backend.employee;

import java.time.LocalDate;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.lang.Nullable;

public class EmployeeUpdateDTO {

	@Nullable
	@Pattern(regexp = "[a-zA-Z]*")
	String firstName;
	
	@Pattern(regexp = "\\s*|[a-zA-Z]*")
	@Nullable
	String middleName;
	
	@Nullable
	@Pattern(regexp = "\\s*|[a-zA-Z]*")
	String lastName;
	
	@Nullable
	@Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\\\.[A-Za-z0-9-]+)*(\\\\.[A-Za-z]{2,})$")
	String email;
	
	@Nullable
	@Pattern(regexp = "[0-9]*{10}")
	Long mobileNumber;
	
	@Nullable
	String address;
	
	@Nullable
	String contractType;
	
	@Nullable
    LocalDate startDate;

    @Nullable
    LocalDate endDate;
    
    @NotBlank
    String employTime;
    
    @Nullable
    @Min(3)
    @Max(38)
    Byte hoursPerWk;
    
    public EmployeeUpdateDTO(String firstName, 
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

	public Byte getHoursPerWk() {
		return hoursPerWk;
	}

	public void setHoursPerWk(Byte hoursPerWk) {
		this.hoursPerWk = hoursPerWk;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}
}


