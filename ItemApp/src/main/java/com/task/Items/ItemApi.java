package com.task.Items;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/items")
@Slf4j
@RequiredArgsConstructor
public class ItemApi {
	
      @Autowired
	  private  ItemService itemService;

	@GetMapping()
	public ResponseEntity<List<Item>> findAll() {
		  return ResponseEntity.ok(itemService.findAll());
	}

	@GetMapping(value = "/{itemNo}")
	public ResponseEntity<Item> findByItemNo(@PathVariable final Long itemNo) {
		Optional<Item> stock = itemService.findByItemNo(itemNo);
		 if (!stock.isPresent()) {
	          ResponseEntity.badRequest().build();
	        }

	     return ResponseEntity.ok(stock.get());

	}

	@PutMapping(value = "/withdraw/{itemNo}")
	public ResponseEntity<Item> Withdraw(@PathVariable final Long itemNo) {
		Optional<Item> oItem = itemService.findByItemNo(itemNo);
		if(oItem.isPresent())
		{
			Item item= oItem.get();
			int amount = item.getAmount();
			if (amount > 0) {
				amount--;
				item.setAmount(amount);
				itemService.save(item);
			}
			return ResponseEntity.ok(item);
		}
		
		return  ResponseEntity.badRequest().build();
	}

	@PutMapping(value = "/deposit/{itemNo}")
	public ResponseEntity<Item> Deposit(@PathVariable final Long itemNo) {
		Optional<Item> oItem = itemService.findByItemNo(itemNo);
		if(oItem.isPresent())
		{
			Item item= oItem.get();
			int amount = item.getAmount();
			if(amount<Integer.MAX_VALUE)
			{
				amount++;
				item.setAmount(amount);
				itemService.save(item);
			}
			return ResponseEntity.ok(item);
		}
		
		return  ResponseEntity.badRequest().build();
	}

	 @PostMapping
	public ResponseEntity<Object> addItem( @RequestBody final Item item) {
		
		 return ResponseEntity.ok(itemService.save(item));
	}
	@DeleteMapping("/{id}")
    public ResponseEntity<List<Item>> delete(@PathVariable Long id) {
        if (!itemService.findByItemNo(id).isPresent()) {
           
            ResponseEntity.badRequest().build();
        }

        itemService.deleteById(id);

        return ResponseEntity.ok(itemService.findAll());
    }
	@ControllerAdvice
    public class RestExceptionHandler extends ResponseEntityExceptionHandler {

        @Override
        protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
           return new ResponseEntity<Object>("",headers,status);
        }
    }

}
