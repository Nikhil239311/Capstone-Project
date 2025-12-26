package com.example.inventory_service.inventory_service.service.impl;

import com.example.inventory_service.inventory_service.entity.Inventory;
import com.example.inventory_service.inventory_service.repository.InventoryRepository;
import com.example.inventory_service.inventory_service.service.InventoryService;

import org.springframework.stereotype.Service;

@Service
public class InventoryServiceImpl implements InventoryService {

    private final InventoryRepository inventoryRepository;

    public InventoryServiceImpl(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    @Override
    public Inventory addStock(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    @Override
    public boolean isInStock(Long productId, Integer quantity) {
        Inventory inventory = inventoryRepository.findByProductId(productId)
                .orElseThrow(() -> new RuntimeException("Product not found in inventory"));

        return inventory.getQuantity() >= quantity;
    }

    @Override
    public Inventory reduceStock(Long productId, Integer quantity) {
        Inventory inventory = inventoryRepository.findByProductId(productId)
                .orElseThrow(() -> new RuntimeException("Product not found in inventory"));

        if (inventory.getQuantity() < quantity) {
            throw new RuntimeException("Insufficient stock");
        }

        inventory.setQuantity(inventory.getQuantity() - quantity);
        return inventoryRepository.save(inventory);
    }
}
