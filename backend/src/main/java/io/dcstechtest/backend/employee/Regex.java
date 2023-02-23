package io.dcstechtest.backend.employee;

public class Regex {
	final static String nameRegex = "[a-zA-Z]*";
	
	final static String emailRegex = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\\\.[A-Za-z0-9-]+)*(\\\\.[A-Za-z]{2,})$";
	
	final static String numberRegex = "[0-9]*{10}";
}
