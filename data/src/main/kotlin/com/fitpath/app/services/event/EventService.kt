package com.fitpath.app.services.event

import com.fitpath.app.dto.event.EventDTO
import com.fitpath.app.entities.event.EventEntity
import com.fitpath.app.repositories.event.EventRepository
import com.fitpath.app.util.UUIDConverter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*

@Service
class EventService(private val eventRepository: EventRepository) {

    fun createEvent(eventDTO: EventDTO, userId: UUID): EventDTO {
        val event = EventEntity(
            creatorId = UUIDConverter.uuidToByteArray(userId),
            type = eventDTO.type,
            name = eventDTO.name,
            locale = eventDTO.locale,
            description = eventDTO.description)
        val register = eventRepository.save(event)

        return EventDTO(register.id, register.creatorId, register.type, register.name, register.locale, register.description)
    }

    fun getAllEvents(): List<EventDTO> {
        val allEvent = eventRepository.findAll()

        return allEvent.map { event -> EventDTO(event.id, event.creatorId, event.type, event.name, event.locale, event.description) }
    }

    fun getEventByCreatorId(userId: UUID): List<EventDTO> {
        val userIdByteArray = UUIDConverter.uuidToByteArray(userId)
        val eventList = eventRepository.findByCreatorId(userIdByteArray)
        return eventList.map { event -> EventDTO(event.id, event.creatorId, event.type, event.name, event.locale, event.description) }
    }
}