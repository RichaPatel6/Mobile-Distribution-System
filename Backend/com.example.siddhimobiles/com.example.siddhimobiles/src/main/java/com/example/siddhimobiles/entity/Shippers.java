package com.example.siddhimobiles.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="Shippers")
public class Shippers {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Shipper_Id")
	private Long shipperId;

	@Column(name="Shipper_Company_Name")
	private String shipperCompanyName;
	
	@Column(name="Shipper_Phone")
	private String shipperPhone;
	
	@ManyToOne
	@JoinColumn(name="Order_Id")
	private Orders orderId;
	
	public Shippers() {
	}

	public Shippers(Long shipperId, String shipperCompanyName, String shipperPhone) {
		super();
		this.shipperId = shipperId;
		this.shipperCompanyName = shipperCompanyName;
		this.shipperPhone = shipperPhone;
	}

	public Long getShipperId() {
		return shipperId;
	}

	public void setShipperId(Long shipperId) {
		this.shipperId = shipperId;
	}

	public String getShipperCompanyName() {
		return shipperCompanyName;
	}

	public void setShipperCompanyName(String shipperCompanyName) {
		this.shipperCompanyName = shipperCompanyName;
	}

	public String getShipperPhone() {
		return shipperPhone;
	}

	public void setShipperPhone(String shipperPhone) {
		this.shipperPhone = shipperPhone;
	}

	@Override
	public String toString() {
		return "Shippers [shipperId=" + shipperId + ", shipperCompanyName=" + shipperCompanyName + ", shipperPhone="
				+ shipperPhone + "]";
	}
	
	
	
	
	
}
