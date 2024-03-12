package com.example.siddhimobiles.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Employee")
public class Employee {
	@Id
	@Column(name="Employee_id")
	private long empId;
	
	@Column(name="Employee_name")
	private String empName;
	
	@Column(name="Employee_address")
	private String address;
	
	@Column(name="Employee_contact")
	private String  phone;
	
	@Column(name="Employee_salary")
	private double salary;
	
	public Employee() {
	}

	public Employee(long emp_id, String emp_name, String address, String phone, double salary) {
		super();
		this.empId = emp_id;
		this.empName = emp_name;
		this.address = address;
		this.phone = phone;
		this.salary = salary;
	}

	public long getEmpId() {
		return empId;
	}

	public void setEmpId(long empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", empName=" + empName + ", address=" + address + ", phone=" + phone
				+ ", salary=" + salary + "]";
	}

}
