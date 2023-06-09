package com.fitpath.app.services.user

import com.fitpath.app.dto.user.UserDTO
import com.fitpath.app.entities.user.UserEntity
import com.fitpath.app.repositories.user.UserRepository
import com.fitpath.app.util.UUIDConverter
import org.springframework.stereotype.Service
import java.util.*
import java.util.UUID.*

@Service
class UserService(private val userRepository: UserRepository) {
    fun createUser(userDTO: UserDTO): UUID {
        val user = UserEntity(
            id = UUIDConverter.uuidToByteArray(randomUUID()),
            email = userDTO.email,
            password = userDTO.password,
            name = userDTO.name,
            lastName = userDTO.lastName,
            avatarUrl = userDTO.avatarUrl,
            locale = userDTO.locale,
            description = userDTO.description)
        userRepository.save(user)
        return UUIDConverter.byteArrayToUUID(user.id)

    }

    fun getAllUsers(): List<UserDTO> {
        val listUsers = userRepository.findAll()
        return listUsers.map { user -> UserDTO(UUIDConverter.byteArrayToUUID(user.id!!), user.email,user.name, user.lastName, user.avatarUrl, user.locale, user.description) }
    }

    fun getUserByEmail(userDTO: UserDTO): UserDTO? {
        val user = userRepository.findUserByEmail(userDTO.email) ?: return null
        val pass = userDTO.password!!.compareTo(user.password.toString())
        return if (pass == 0) {
            UserDTO(UUIDConverter.byteArrayToUUID(user.id),user.email, user.name, user.lastName, user.avatarUrl, user.locale, user.description)
        } else {
            null
        }
    }

    fun getUserByUserId(userId: UUID): UserDTO? {
        val userIdByteArray = UUIDConverter.uuidToByteArray(userId)
        val user = userRepository.findById(userIdByteArray)
        return UserDTO(UUIDConverter.byteArrayToUUID(user.id),user.email, user.name, user.lastName, user.avatarUrl, user.locale, user.description)
    }

    fun alterMyInformations(userId: UUID, userDTO: UserDTO): UserDTO {
        val userIdByteArray = UUIDConverter.uuidToByteArray(userId)
        val user = userRepository.findById(userIdByteArray)
        user.alterInformations(userDTO)
        userRepository.save(user)
        return UserDTO(UUIDConverter.byteArrayToUUID(user.id),user.email, user.password, user.name, user.lastName, user.avatarUrl, user.locale, user.description)
    }
}
