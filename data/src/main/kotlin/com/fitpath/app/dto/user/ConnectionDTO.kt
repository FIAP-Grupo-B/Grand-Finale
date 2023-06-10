package com.fitpath.app.dto.user

import java.time.LocalDateTime
import java.util.*


class ConnectionDTO(
    var userId1: UUID?,
    var userId2: UUID?,
    var status: Boolean?,
    var dateConnection: LocalDateTime?,

    ) {
    constructor(userId1: UUID?, userId2: UUID?):
            this(userId1!!,userId2!!,null,null)

}