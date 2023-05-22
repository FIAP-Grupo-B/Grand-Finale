package com.fitpath.app.services

import com.fitpath.app.dto.ProgressWeightGoalDTO
import com.fitpath.app.entities.goal.progress.ProgressWeightGoalEntity
import com.fitpath.app.repositories.ProgressWeightGoalRepository
import org.springframework.stereotype.Service

@Service
class ProgressWeightGoalService (private val progressWeightGoalRepository: ProgressWeightGoalRepository) {
    fun progressChecking (progressWeightGoalDTO: ProgressWeightGoalDTO): ProgressWeightGoalEntity {
        val progressWeightGoal = ProgressWeightGoalEntity (

            idUser = progressWeightGoalDTO.idUser,
            idGoal = progressWeightGoalDTO.idGoal,
            stepDate = progressWeightGoalDTO.stepDate,
            weightValue = progressWeightGoalDTO.weightValue

        )
        return progressWeightGoalRepository.save(progressWeightGoal)
    }
}