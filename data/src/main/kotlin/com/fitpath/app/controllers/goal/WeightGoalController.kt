package com.fitpath.app.controllers.goal

import com.fitpath.app.dto.goal.WeightGoalDTO
import com.fitpath.app.entities.goal.WeightGoalEntity
import com.fitpath.app.services.goal.WeightGoalService
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
@RequestMapping("/{user}")
class WeightGoalController(private val weightGoalService: WeightGoalService) {
    @PostMapping("/create_weight_goal")
    fun createWeightGoal(@PathVariable user: UUID, @RequestBody weightGoalDTO: WeightGoalDTO): WeightGoalEntity {
        return weightGoalService.createWeightGoal(user, weightGoalDTO)
    }
}