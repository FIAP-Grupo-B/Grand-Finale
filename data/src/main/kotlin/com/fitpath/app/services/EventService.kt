package com.fitpath.app.services

import com.fitpath.app.dto.EventDTO
import com.fitpath.app.entities.EventEntity
import com.fitpath.app.repositories.EventRepository
import com.fitpath.app.repositories.UserRepository
import jakarta.persistence.EntityNotFoundException
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.PostMapping

@Service
class EventService(private val eventRepository: EventRepository) {

    fun createEvent(eventDTO: EventDTO, creatorId: Int): EventEntity {
        val event = EventEntity(
                                creatorId = creatorId,
                                type = eventDTO.type,
                                name = eventDTO.name,
                                locale = eventDTO.locale,
                                description = eventDTO.description
                                )
        return eventRepository.save(event)
    }

    fun getAllEvents(): List<EventDTO> {
        val allEvent = eventRepository.findAll()
        return allEvent.map { event -> EventDTO(event.id, event.creatorId, event.type, event.name, event.locale, event.description)}
    }

    fun getEventByCreatorId(creatorId: Int): List<EventDTO> {
        /*
        val userId = userRepository.findById(creatorId).orElseThrow { EntityNotFoundException("Usuário não encontrado!") }
        */
        val eventList = eventRepository.findByCreatorId(creatorId)
        return eventList.map { event -> EventDTO(event.id, event.creatorId, event.name, event.type, event.locale, event.description,)}
    }
}