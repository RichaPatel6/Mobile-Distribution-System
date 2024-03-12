package com.example.siddhimobiles.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.siddhimobiles.entity.Payment;
import com.example.siddhimobiles.service.PaymentServices;

@RestController
public class PaymentController {
	@Autowired
	private PaymentServices paymentServiceRef;

	@GetMapping("/payment")
	public Collection<Payment> getAllPayment() {
		Collection<Payment> allPayment = paymentServiceRef.getAllPayment();
		return allPayment;
	}

	@GetMapping("/payment/{paymentId}")
	public Payment getOnePayment(@PathVariable("paymentId") Long id) {
		Payment foundPayment = paymentServiceRef.getOnePayment(id);
		return foundPayment;
	}

	@PostMapping("/payment")
	public void addNewPayment(@RequestBody Payment paymentRef) {
		System.out.println(paymentRef);
		paymentServiceRef.addNewPayment(paymentRef);

	}

	@DeleteMapping("/payment/{paymentId}")
	public void deleteOnePayment(@PathVariable("paymentId") Long id) {
		paymentServiceRef.deleteOnePayment(id);
	}
}
