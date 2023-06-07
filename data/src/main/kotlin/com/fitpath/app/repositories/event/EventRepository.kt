package com.fitpath.app.repositories.event

import com.fitpath.app.dto.event.EventDTO
import com.fitpath.app.entities.event.EventEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface EventRepository: JpaRepository<EventEntity, Int> {
    fun findByCreatorId(userId: ByteArray): List<EventDTO>
}