package com.example.inventory_service.inventory_service.service;

import com.example.inventory_service.inventory_service.entity.Inventory;

public interface InventoryService {

    Inventory addStock(Inventory inventory);

    boolean isInStock(Long productId, Integer quantity);

    Inventory reduceStock(Long productId, Integer quantity);
}
