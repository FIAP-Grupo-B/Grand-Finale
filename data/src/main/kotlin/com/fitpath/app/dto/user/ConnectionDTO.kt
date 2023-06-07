package com.fitpath.app.dto.user

import jakarta.persistence.Column
import jakarta.persistence.Id
import java.time.LocalDateTime
import java.util.*

class ConnectionDTO(
    var idUser1: ByteArray? = null,
    var idUser2: ByteArray? = null,
    var status: Boolean? = null,
    var dateConnection: Date? = null,
) {
}