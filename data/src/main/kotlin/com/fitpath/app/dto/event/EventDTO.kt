package com.fitpath.app.dto.event

import java.util.UUID

class EventDTO (
                var id: Int? = null,
                var creatorId: ByteArray? = null,
                var type: String,
                var name: String,
                var locale: String,
                var description: String) {

}