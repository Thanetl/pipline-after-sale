package com.dcs.aftersaleapi.repository;

import com.dcs.aftersaleapi.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // You can add custom query methods if needed
}
