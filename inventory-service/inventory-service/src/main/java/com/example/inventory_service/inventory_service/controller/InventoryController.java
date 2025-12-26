package com.example.inventory_service.inventory_service.controller;

import com.example.inventory_service.inventory_service.entity.Inventory;
import com.example.inventory_service.inventory_service.service.InventoryService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/inventory")
public class InventoryController {

    private final InventoryService inventoryService;

    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @PostMapping
    public Inventory addStock(@RequestBody Inventory inventory) {
        return inventoryService.addStock(inventory);
    }

    @GetMapping("/check/{productId}/{quantity}")
    public boolean checkStock(@PathVariable Long productId,
                              @PathVariable Integer quantity) {
        return inventoryService.isInStock(productId, quantity);
    }

    @PutMapping("/reduce/{productId}/{quantity}")
    public Inventory reduceStock(@PathVariable Long productId,
                                 @PathVariable Integer quantity) {
        return inventoryService.reduceStock(productId, quantity);
    }
}
