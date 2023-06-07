package com.fitpath.app.entities.goal

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name = "tb_fpt_weight_goal")
data class WeightGoalEntity(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    var idGoal: Long? = null,

    @Column(name = "user_id")
    var idUser: ByteArray? = null,

    @Column(name = "goal_value", nullable = false)
    var goalValue: Double,

    @Column(name = "achievement_date", nullable = false)
    var dateAchievement: Date) {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as WeightGoalEntity

        if (idUser != null) {
            if (other.idUser == null) return false
            if (!idUser.contentEquals(other.idUser)) return false
        } else if (other.idUser != null) return false

        return true
    }

    override fun hashCode(): Int {
        return idUser?.contentHashCode() ?: 0
    }
}