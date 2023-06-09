package com.fitpath.app.dto.event

import org.springframework.beans.factory.annotation.Autowired
import java.util.UUID

class EventDTO(
    var id: Int?,
    var creatorId: ByteArray?,
    var type: String,
    var name: String,
    var locale: String,
    var description: String) {

}