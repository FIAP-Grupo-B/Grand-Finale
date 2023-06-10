package com.fitpath.app.dto.goal

import java.time.LocalDateTime
import java.util.*

class HydrationGoalDTO(
    var idGoal: Long?,
    var idUser: UUID?,
    var goalValue: Double,
    var creationDate: LocalDateTime?,
    var status: Boolean?) {
}