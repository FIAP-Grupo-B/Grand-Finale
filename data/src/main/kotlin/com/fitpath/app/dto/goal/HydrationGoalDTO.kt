package com.fitpath.app.dto.goal

import java.time.LocalDateTime

class HydrationGoalDTO(
                    var idUser: ByteArray? = null,
                    var idGoal: Long? = null,
                    var goalValue: Double,
                    var creationDate: LocalDateTime? = null,
                    var status: Boolean? =null) {
}