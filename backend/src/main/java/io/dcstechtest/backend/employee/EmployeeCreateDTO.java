package io.dcstechtest.backend.employee;

import java.time.LocalDate;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.lang.Nullable;

public class EmployeeCreateDTO {

	@NotBlank
	@Pattern(regexp = "[a-zA-Z]*")
	private String firstName;
	@Pattern(regexp = "\\s*|[a-zA-Z]*")
	@Nullable
	private String middleName;
	@NotBlank
	@Pattern(regexp = "\\s*|[a-zA-Z]*")
	private String lastName;
	@NotBlank
	@Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\\\.[A-Za-z0-9-]+)*(\\\\.[A-Za-z]{2,})$")
	private String email;
	
	@NotNull
	@Pattern(regexp = "[0-9]*{10}")
	private Long mobileNumber;
	
	@NotBlank
	private String address;
	
	@NotBlank
	private String contractType;
	
	@NotNull
    private String startDate;

    @Nullable
    private LocalDate endDate;
    
    @NotBlank
    private String employTime;
    
    @NotNull
    @Min(3)
    @Max(38)
    private String hoursPerWk;
    
    public EmployeeCreateDTO() {
    	
    }
    
    public EmployeeCreateDTO(String firstName, 
    		String middleName, 
    		String lastName, 
    		String email, 
    		Long mobileNumber, 
    		String address, 
    		String contractType, 
    		String startDate, 
    		LocalDate endDate, 
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

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}
}


