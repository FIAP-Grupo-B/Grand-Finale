package com.fitpath.app.services.goal

import com.fitpath.app.dto.goal.WeightGoalDTO
import com.fitpath.app.entities.goal.WeightGoalEntity
import com.fitpath.app.repositories.goal.WeightGoalRepository
import com.fitpath.app.util.UUIDConverter
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class WeightGoalService (private val weightGoalRepository: WeightGoalRepository) {
    fun createWeightGoal(user: UUID, weightGoalDTO: WeightGoalDTO): WeightGoalEntity {
        val goal = WeightGoalEntity(
            idUser = UUIDConverter.uuidToBinary(user),
            goalValue = weightGoalDTO.goalValue,
            dateAchievement = weightGoalDTO.achievementDate
        )
        return weightGoalRepository.save(goal)
    }
}