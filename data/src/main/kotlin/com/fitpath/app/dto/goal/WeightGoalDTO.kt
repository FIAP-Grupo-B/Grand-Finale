package com.fitpath.app.dto.goal

import java.time.LocalDateTime
import java.util.*

class WeightGoalDTO(
    var idGoal: Long?,
    var idUser: UUID?,
    var goalValue: Double,
    var achievementDate: LocalDateTime) {
}