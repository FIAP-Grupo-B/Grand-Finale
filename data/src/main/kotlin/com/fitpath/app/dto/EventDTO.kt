package com.fitpath.app.dto

class EventDTO (
                var id: Int? = null,
                var creatorId: Int,
                var type: String,
                var name: String,
                var locale: String,
                var description: String) {

}