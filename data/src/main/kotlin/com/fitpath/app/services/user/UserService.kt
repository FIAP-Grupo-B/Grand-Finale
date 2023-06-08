package com.fitpath.app.services.user

import com.fitpath.app.dto.user.UserDTO
import com.fitpath.app.entities.user.UserEntity
import com.fitpath.app.repositories.user.UserRepository
import com.fitpath.app.util.UUIDConverter
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(private val userRepository: UserRepository) {
    fun createUser(userDTO: UserDTO): UserEntity {
        val user = UserEntity(
            email = userDTO.email,
            password = userDTO.password,
            name = userDTO.name,
            lastName = userDTO.lastName,
            avatarUrl = userDTO.avatarUrl,
            locale = userDTO.locale,
            description = userDTO.description)
        return userRepository.save(user)
    }

    fun getAllUsers(): List<UserDTO> {
        val listUsers = userRepository.findAll()
        return listUsers.map { user -> UserDTO(user.id!!, user.email,user.name, user.lastName, user.avatarUrl, user.locale, user.description) }
    }

    fun getUserByEmail(email: String): UserDTO? {
        val user = userRepository.findUserByEmail(email) ?: return null
        return UserDTO(user.id,user.email, user.password, user.name, user.lastName, user.avatarUrl, user.locale, user.description)
    }

    fun alterMyInformations(userId: UUID, userDTO: UserDTO): UserEntity{
        val uuidByteArray = UUIDConverter.uuidToBinary(userId)
        val user = userRepository.findById(uuidByteArray)

        user.alterInformations(userDTO)
        return userRepository.save(user)
    }
}