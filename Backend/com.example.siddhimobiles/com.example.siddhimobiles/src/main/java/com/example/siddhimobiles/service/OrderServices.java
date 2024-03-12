package com.example.siddhimobiles.service;

import com.example.siddhimobiles.entity.Orders;
import com.example.siddhimobiles.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServices {

    @Autowired
    private OrderRepository orderRepository;

 
    public List<Orders> findAllOrders() {
        return orderRepository.findAll();
    }


    public Optional<Orders> findOrderById(Long id) {
        return orderRepository.findById(id);
    }


    public Orders saveOrUpdateOrder(Orders order) {
        return orderRepository.save(order);
    }


    public void deleteOrderById(Long id) {
        orderRepository.deleteById(id);
    }
}
