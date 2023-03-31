package com.fitpath.app.controllers

import com.fitpath.app.dto.EventDTO
import com.fitpath.app.entities.EventEntity
import com.fitpath.app.services.EventService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user")
class EventController(private val eventService: EventService) {
    @PostMapping("/{creatorId}/createEvent")
    fun createEvent(@PathVariable creatorId: Int, @RequestBody eventDTO: EventDTO): EventEntity {
        return eventService.createEvent(eventDTO, creatorId)
    }

    @GetMapping("/allEvent")
    fun getAllEvent(): List<EventDTO>{
        return eventService.getAllEvents()
    }

    @GetMapping("/{creatorId}/eventList")
    fun getEventByCreatorId(@PathVariable creatorId: Int): List<EventDTO> {
        return eventService.getEventByCreatorId(creatorId)
    }
}