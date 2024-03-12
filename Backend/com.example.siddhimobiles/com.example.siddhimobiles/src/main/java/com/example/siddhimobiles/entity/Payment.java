package com.example.siddhimobiles.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="payment")
public class Payment {
	@Id
	@Column(name="Payment_id")
	private long paymentId;
	
	@Column(name="Payment_type")
	private String paymentType;
	
	@Column(name="Payment_amount")
	private double paymentAmount;
	
	@OneToOne
	@JoinColumn(name="Order_Id")
	private Orders orderId;

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(long paymentId, String paymentType, double paymentAmount, Orders orderId) {
		super();
		this.paymentId = paymentId;
		this.paymentType = paymentType;
		this.paymentAmount = paymentAmount;
		this.orderId = orderId;
	}

	public long getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(long paymentId) {
		this.paymentId = paymentId;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public double getPaymentAmount() {
		return paymentAmount;
	}

	public void setPaymentAmount(double paymentAmount) {
		this.paymentAmount = paymentAmount;
	}

	public Orders getOrderId() {
		return orderId;
	}

	public void setOrderId(Orders orderId) {
		this.orderId = orderId;
	}

	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", paymentType=" + paymentType + ", paymentAmount=" + paymentAmount
				+ ", orderId=" + orderId + "]";
	}
	
	

}
