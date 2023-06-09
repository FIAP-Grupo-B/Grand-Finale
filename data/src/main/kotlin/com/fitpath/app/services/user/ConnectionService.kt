package com.fitpath.app.services.user

import com.fitpath.app.dto.user.ConnectionDTO
import com.fitpath.app.dto.user.UserDTO
import com.fitpath.app.entities.user.ConnectionEntity
import com.fitpath.app.repositories.user.ConnectionRepository
import com.fitpath.app.util.UUIDConverter
import org.springframework.stereotype.Service
import java.util.*

@Service
class ConnectionService(private val connectionRepository: ConnectionRepository) {
    fun createConnection(connectionDTO: ConnectionDTO): ConnectionEntity {
        val connection = ConnectionEntity(
            idUser1 = connectionDTO.userId1,
            idUser2 = connectionDTO.userId2,
            status = connectionDTO.status,
            dateConnection = connectionDTO.dateConnection)
        return connectionRepository.save(connection)
    }
/*
    fun pendingRequests(user: UUID): List<ConnectionDTO>? {
        val listUsers = connectionRepository.findAll()
        return listUsers.map { user -> UserDTO(UUIDConverter.byteArrayToUUID(user.id!!), user.email,user.name, user.lastName, user.avatarUrl, user.locale, user.description) }
    }

 */
}