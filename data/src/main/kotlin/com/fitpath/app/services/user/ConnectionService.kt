package com.fitpath.app.services.user

import com.fitpath.app.dto.user.ConnectionDTO
import com.fitpath.app.entities.user.ConnectionEntity
import com.fitpath.app.repositories.user.ConnectionRepository
import com.fitpath.app.util.UUIDConverter
import org.springframework.stereotype.Service
import java.util.*

@Service
class ConnectionService(private val connectionRepository: ConnectionRepository) {
    fun createConnection(connectionDTO: ConnectionDTO): ConnectionEntity {
        val connection = ConnectionEntity(
            userId1 = UUIDConverter.uuidToByteArray(connectionDTO.userId1),
            userId2 = UUIDConverter.uuidToByteArray(connectionDTO.userId2),
            status = false,
            dateConnection = connectionDTO.dateConnection)
        return connectionRepository.save(connection)
    }
/*
    fun pendingRequests(user: UUID): List<ConnectionDTO>? {
        val userIdToBePending = UUIDConverter.uuidToByteArray(user)
        val listPendingRequests = connectionRepository.findPendingRequests(userIdToBePending)
        return listPendingRequests?.map { request -> ConnectionDTO(UUIDConverter.byteArrayToUUID(request.userId1), UUIDConverter.byteArrayToUUID(request.userId2), request.status, request.dateConnection) }
    }
*/

}