package com.fitpath.app.dto.goal

import java.util.*

class WeightGoalDTO(
                    var idUser: ByteArray? = null,
                    var idGoal: Long? = null,
                    var goalValue: Double,
                    var achievementDate: Date) {
}