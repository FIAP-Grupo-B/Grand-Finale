package com.fitpath.app.controllers.user

import com.fitpath.app.dto.user.UserDTO
import com.fitpath.app.services.user.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/user")
class UserController (private val userService: UserService){
    @PostMapping("/create")
    fun createUser(@RequestBody userDTO: UserDTO): UUID {
        return userService.createUser(userDTO)
    }

    @GetMapping("/users")
    fun getAllUsers(): List<UserDTO> {
        return userService.getAllUsers()
    }

    @GetMapping("/{userId}")
    fun getUserByID(@PathVariable userId: UUID): UserDTO? {
        return userService.getUserByUserId(userId)
    }

    @GetMapping("/login")
    fun getUserByEmail(@RequestBody userDTO: UserDTO): UserDTO? {
        return userService.getUserByEmail(userDTO)
    }

    @PostMapping("alter/{userId}")
    fun alterMyInformations(@PathVariable userId: UUID, @RequestBody userDTO: UserDTO): UserDTO {
        return userService.alterMyInformations(userId, userDTO)
    }

}