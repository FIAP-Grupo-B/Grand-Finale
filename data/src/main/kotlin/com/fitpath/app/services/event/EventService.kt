package com.fitpath.app.services.event

import com.fitpath.app.dto.event.EventDTO
import com.fitpath.app.entities.event.EventEntity
import com.fitpath.app.repositories.event.EventRepository
import com.fitpath.app.util.UUIDConverter
import com.fitpath.app.util.UUIDConverter.byteArrayToUUID
import org.springframework.stereotype.Service
import java.util.*

@Service
class EventService(private val eventRepository: EventRepository) {

    fun createEvent(eventDTO: EventDTO, userId: UUID): EventEntity {
        val event = EventEntity(
            creatorId = UUIDConverter.uuidToBinary(userId),
            type = eventDTO.type,
            name = eventDTO.name,
            locale = eventDTO.locale,
            description = eventDTO.description)
        return eventRepository.save(event)
    }

    fun getAllEvents(): List<EventDTO> {
        val allEvent = eventRepository.findAll()
        return allEvent.map { event -> EventDTO(event.id, event.creatorId, event.type, event.name, event.locale, event.description) }
    }

    fun getEventByCreatorId(userId: UUID): List<EventDTO> {
        val userIdByteArray = UUIDConverter.uuidToBinary(userId)
        val eventList = eventRepository.findByCreatorId(userIdByteArray)
        return eventList.map { event -> EventDTO(event.id, event.creatorId, event.type, event.name, event.locale, event.description,) }
    }
}