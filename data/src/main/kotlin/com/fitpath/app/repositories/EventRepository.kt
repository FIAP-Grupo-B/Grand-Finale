package com.fitpath.app.repositories

import com.fitpath.app.dto.EventDTO
import com.fitpath.app.entities.EventEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface EventRepository: JpaRepository<EventEntity, Long> {
    fun findByCreatorId(creatorId: Int): List<EventDTO>
}