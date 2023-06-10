package com.fitpath.app.dto.goal

import java.time.LocalDateTime
import java.util.*

class WeightGoalDTO(
    var idUser: Long?,
    var idGoal: UUID?,
    var goalValue: Double,
    var achievementDate: LocalDateTime) {
}