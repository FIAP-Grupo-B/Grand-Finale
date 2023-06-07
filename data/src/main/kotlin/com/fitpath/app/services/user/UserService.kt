package com.fitpath.app.services.user

import com.fitpath.app.dto.user.UserDTO
import com.fitpath.app.entities.user.UserEntity
import com.fitpath.app.repositories.user.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {
    fun createUser(userDTO: UserDTO): UserEntity {
        val user = UserEntity(
            email = userDTO.email,
            password = userDTO.password,
            name = userDTO.name,
            lastName = userDTO.lastName,
            avatarUrl = userDTO.avatarUrl)
        return userRepository.save(user)
    }

    fun getAllUsers(): List<UserDTO> {
        val listUsers = userRepository.findAll()
        return listUsers.map { user -> UserDTO(user.id!!, user.email,user.name, user.lastName, user.avatarUrl) }
    }

    fun getUserByEmail(email: String): UserDTO? {
        val user = userRepository.findUserByEmail(email) ?: return null
        return UserDTO(user.id,user.email, user.password, user.name, user.lastName, user.avatarUrl)
    }

}