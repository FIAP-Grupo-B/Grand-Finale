package com.fitpath.app.controllers

import com.fitpath.app.dto.UserDTO
import com.fitpath.app.entities.UserEntity
import com.fitpath.app.services.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user")
class UserController (private val userService: UserService){
    @PostMapping("/create")
    fun createUser(@RequestBody userDTO: UserDTO): UserEntity {
        return userService.createUser(userDTO)
    }

    @GetMapping("/users")
    fun getAllUsers(): List<UserDTO> {
        return userService.getAllUsers()
    }

    @GetMapping("/{email}")
    fun getUserByEmail(@PathVariable email: String): ResponseEntity<UserDTO> {
        val userDTO = userService.getUserByEmail(email) ?: return ResponseEntity.notFound().build()
        return ResponseEntity.ok(userDTO)
    }


}