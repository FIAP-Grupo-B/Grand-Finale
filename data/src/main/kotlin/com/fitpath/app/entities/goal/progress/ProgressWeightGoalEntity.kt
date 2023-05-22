package com.fitpath.app.entities.goal.progress

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name = "tb_fpt_progress_weight_goal")
class ProgressWeightGoalEntity (
                                @Id
                                @Column(name = "cod_id_user_weight_goal", nullable = false)
                                var idUser: Int,
                                var idGoal: Int,
                                var stepDate: Date,
                                var weightValue: Double) {
}