package com.fitpath.app.controllers.user

import com.fitpath.app.dto.user.ConnectionDTO
import com.fitpath.app.entities.user.ConnectionEntity
import com.fitpath.app.services.user.ConnectionService
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/{user}")
class ConnectionController(private val connectionService: ConnectionService) {
    @PostMapping("/connect?user2={user2}")
    fun createConnection(@PathVariable user: UUID, user2: UUID, @RequestBody connectionDTO: ConnectionDTO): ConnectionEntity {
        return connectionService.createConnection(user,user2, connectionDTO)
    }
}