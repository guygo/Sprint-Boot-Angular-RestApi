package com.task.Items;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;


@Entity
@Data
public class Item {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long itemNo;
    String name;
    Integer amount;
    
    @Column(unique=true,nullable = false)
    String inventoryCode;
   
    public Long getItemNo() {
		return itemNo;
	}
    public Integer getAmount() {
		return amount;
	}
    public String getName() {
		return name;
	}
    public String getInventoryCode() {
		return inventoryCode;
	}
    public void setAmount(Integer amount) {
		this.amount = amount;
	}
    public void setName(String name) {
		this.name = name;
	}
    public void setItemNo(Long itemNo) {
		this.itemNo = itemNo;
	}
    public void setInventoryCode(String inventory_code) {
		this.inventoryCode = inventory_code;
	}
    
    
}