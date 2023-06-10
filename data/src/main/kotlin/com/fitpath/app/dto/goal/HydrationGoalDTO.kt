package com.fitpath.app.dto.goal

import java.time.LocalDateTime
import java.util.*

class HydrationGoalDTO(
    var idUser: Long?,
    var idGoal: UUID?,
    var goalValue: Double,
    var creationDate: LocalDateTime?,
    var status: Boolean?) {
}