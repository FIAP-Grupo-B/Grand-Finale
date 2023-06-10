package com.fitpath.app.services.goal

import com.fitpath.app.dto.goal.HydrationGoalDTO
import com.fitpath.app.entities.goal.HydrationGoalEntity
import com.fitpath.app.repositories.goal.HydrationGoalRepository
import com.fitpath.app.util.UUIDConverter
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class HydrationGoalService (private val hydrationGoalRepository: HydrationGoalRepository) {
    fun createWeightGoal(user: UUID, hydrationGoalDTO: HydrationGoalDTO): HydrationGoalEntity {
        val goal = HydrationGoalEntity(
            idUser = UUIDConverter.uuidToByteArray(user),
            goalValue = hydrationGoalDTO.goalValue
        )
        return hydrationGoalRepository.save(goal)
    }
    fun getGoalByCreatorId(userId: UUID): HydrationGoalDTO {
            val userIdByteArray = UUIDConverter.uuidToByteArray(userId)
            val goal = hydrationGoalRepository.findByIdUser(userIdByteArray)
            return HydrationGoalDTO(goal.idGoal, UUIDConverter.byteArrayToUUID(goal.idUser), goal.goalValue, goal.creationDate, goal.status )
    }
}
