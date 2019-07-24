package com.task.Items;

import java.util.Collection;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor

public class ItemService{
	  @Autowired
	private  StockRepository stockRepo;
	public List<Item> findAll() {
        return  (List<Item>) stockRepo.findAll();
    }

    public Optional<Item> findByItemNo(Long id) {
        return stockRepo.findById(id);
    }

    public Item save(Item item) {
        return stockRepo.save(item);
    }

    public void deleteById(Long id) {
    	stockRepo.deleteById(id);
    }

}
