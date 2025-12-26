package com.example.order_service.order_service.service;

import com.example.order_service.order_service.entity.Order;
import java.util.List;

public interface OrderService {

    Order createOrder(Order order);

    List<Order> getAllOrders();

    Order getOrderById(Long id);

     List<Order> getOrdersByUserId(Long userId);
}
