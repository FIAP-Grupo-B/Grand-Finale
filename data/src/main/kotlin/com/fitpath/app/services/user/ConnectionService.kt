package com.fitpath.app.services.user

import com.fitpath.app.dto.user.ConnectionDTO
import com.fitpath.app.entities.user.ConnectionEntity
import com.fitpath.app.repositories.user.ConnectionRepository
import com.fitpath.app.util.UUIDConverter
import org.springframework.stereotype.Service
import java.util.*

@Service
class ConnectionService(private val connectionRepository: ConnectionRepository) {
    fun createConnection(user: UUID, user2: UUID, connectionDTO: ConnectionDTO): ConnectionEntity {
        val connection = ConnectionEntity(
            idUser1 = UUIDConverter.uuidToBinary(user),
            idUser2 = UUIDConverter.uuidToBinary(user2),
            status = connectionDTO.status,
            dateConnection = connectionDTO.dateConnection)
        return connectionRepository.save(connection)
    }
}