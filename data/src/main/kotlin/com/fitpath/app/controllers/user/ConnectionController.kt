package com.fitpath.app.controllers.user

import com.fitpath.app.dto.user.ConnectionDTO
import com.fitpath.app.entities.user.ConnectionEntity
import com.fitpath.app.services.user.ConnectionService
import com.fitpath.app.util.UUIDConverter
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/connections")
class ConnectionController(private val connectionService: ConnectionService) {

    @PostMapping("/{user}/connect")
    fun createConnection(@PathVariable user: UUID, @RequestBody user2:UUID): ConnectionEntity {
        val connectionDTO = ConnectionDTO (
            userId1 = UUIDConverter.uuidToByteArray(user),
            userId2 = UUIDConverter.uuidToByteArray(user2))
        return connectionService.createConnection(connectionDTO)
    }

    /*
    @PostMapping("/{user}/pending-requests")
    fun getPendingRequests(@PathVariable user: UUID): List<ConnectionDTO> {
        return connectionService.pendingRequests(user)
    }
*/
}