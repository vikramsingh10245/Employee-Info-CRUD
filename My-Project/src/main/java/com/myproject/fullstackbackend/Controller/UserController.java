package com.myproject.fullstackbackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.myproject.fullstackbackend.Exception.UserNotFoundException;
import com.myproject.fullstackbackend.Model.User;
import com.myproject.fullstackbackend.Repo.UserRepo;
import com.myproject.fullstackbackend.Exception.UserNotFoundException;
@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

	@Autowired
	private UserRepo userRepo;
	
	@PostMapping("/User/Add")
	User newUser(@RequestBody User newUser)
	{
		return userRepo.save(newUser);
	}
	@GetMapping("/User/GetAll")
	List<User> getAllUsers()
	{
		return userRepo.findAll();
	}
	@GetMapping("/User/GetUser/{id}")
	User getUserById(@PathVariable Long id)
	{
		return userRepo.findById(id)
				.orElseThrow(()->new UserNotFoundException(id));
	}
	@PutMapping("/User/Update/{id}")
	User updateUser(@PathVariable Long id ,@RequestBody User newUser)
	{
		return userRepo.findById(id)
				.map(user->{
					user.setUsername(newUser.getUsername());
					user.setName(newUser.getName());
					user.setEmail(newUser.getEmail());
					return userRepo.save(user);
				}).orElseThrow(()->new UserNotFoundException(id));
	}
	
	@DeleteMapping("User/Delete/{id}")
	String deleteUserByid(@PathVariable Long id)
	{
		if(!userRepo.existsById(id))
		{
			throw new UserNotFoundException(id);
		}
		userRepo.deleteById(id);
		
		return "User With id: "+id +" Has been Deleted Sucessfully";
			
		
				
			
	}
}
