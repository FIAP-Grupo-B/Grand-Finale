package com.fitpath.app.dto.user

import java.time.LocalDateTime


class ConnectionDTO(
    var userId1: ByteArray?,
    var userId2: ByteArray?,
    var status: Boolean?,
    var dateConnection: LocalDateTime?,

) {
    constructor(userId1: ByteArray, userId2: ByteArray):
            this(userId1!!,userId2!!,null,null)

}