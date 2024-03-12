package com.example.siddhimobiles.controller;

import com.example.siddhimobiles.entity.Orders;
import com.example.siddhimobiles.service.OrderServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrdersController {

    @Autowired
    private OrderServices orderService;

    @GetMapping("/orders")
    public List<Orders> getAllOrders() {
        return orderService.findAllOrders();
    }

    // Get order by id
    @GetMapping("/order/{id}")
    public ResponseEntity<Orders> getOrderById(@PathVariable Long id) {
        return orderService.findOrderById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create or update order
    @PostMapping("/orders")
    public Orders createOrUpdateOrder(@RequestBody Orders order) {
        return orderService.saveOrUpdateOrder(order);
    }

    // Delete order
    @DeleteMapping("/order/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long id) {
        return orderService.findOrderById(id).map(order -> {
            orderService.deleteOrderById(id);
            return ResponseEntity.ok().build();
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
