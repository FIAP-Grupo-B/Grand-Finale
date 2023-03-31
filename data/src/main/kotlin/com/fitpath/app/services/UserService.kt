package com.fitpath.app.services

import com.fitpath.app.dto.UserDTO
import com.fitpath.app.entities.UserEntity
import com.fitpath.app.repositories.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {
    fun createUser(userDTO: UserDTO): UserEntity {
        val user = UserEntity(
                                firstName = userDTO.firstName,
                                lastName = userDTO.lastName,
                                email = userDTO.email,
                                avatarUrl = userDTO.avatarUrl
                                )
        return userRepository.save(user)
    }

    fun getAllUsers(): List<UserDTO> {
        val listUsers = userRepository.findAll()
        return listUsers.map { user -> UserDTO(user.id, user.firstName, user.lastName, user.email, user.avatarUrl) }
    }

/*
    private fun UserEntity.toDto() = UserDTO(
        id = id,
        firstName = firstName,
        lastName = lastName,
        email = email,
        avatarUrl = avatarUrl

    )

 */
    fun getUserByEmail(email: String): UserDTO? {
        val user = userRepository.findUserByEmail(email) ?: return null
        return UserDTO(user.id!!, user.firstName, user.lastName, user.email, user.avatarUrl)
    }

}