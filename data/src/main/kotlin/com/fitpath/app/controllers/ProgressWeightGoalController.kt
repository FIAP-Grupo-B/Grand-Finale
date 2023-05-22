package com.fitpath.app.controllers

import com.fitpath.app.dto.ProgressWeightGoalDTO
import com.fitpath.app.entities.goal.progress.ProgressWeightGoalEntity
import com.fitpath.app.services.ProgressWeightGoalService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/user")
class ProgressWeightGoalController(private val progressWeightGoalService: ProgressWeightGoalService) {
    @PostMapping("/checking_weightgoal")
    fun progressChecking(@RequestBody progressWeightGoalDTO: ProgressWeightGoalDTO): ProgressWeightGoalEntity {

        return progressWeightGoalService.progressChecking(progressWeightGoalDTO)
    }
}