package com.fitpath.app.controllers.event

import com.fitpath.app.dto.event.EventDTO
import com.fitpath.app.entities.event.EventEntity
import com.fitpath.app.services.event.EventService
import org.springframework.web.bind.annotation.*
import java.util.UUID

@RestController
@RequestMapping("/{userId}")
class EventController(private val eventService: EventService) {
    @PostMapping("/event/create")
    fun createEvent(@PathVariable userId: UUID, @RequestBody eventDTO: EventDTO): EventEntity {
        return eventService.createEvent(eventDTO, userId)
    }

    @GetMapping("/event/allevents")
    fun getAllEvent(): List<EventDTO>{
        return eventService.getAllEvents()
    }

    @GetMapping("/event/myevents")
    fun getEventByCreatorId(@PathVariable userId: UUID): List<EventDTO> {
        return eventService.getEventByCreatorId(userId)
    }
}