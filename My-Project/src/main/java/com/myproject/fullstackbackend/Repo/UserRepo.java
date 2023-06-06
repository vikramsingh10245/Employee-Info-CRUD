package com.myproject.fullstackbackend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myproject.fullstackbackend.Model.User;

public interface UserRepo extends JpaRepository<User, Long>{

}
