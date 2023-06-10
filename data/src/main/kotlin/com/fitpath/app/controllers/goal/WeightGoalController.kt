package com.fitpath.app.controllers.goal

import com.fitpath.app.dto.event.EventDTO
import com.fitpath.app.dto.goal.WeightGoalDTO
import com.fitpath.app.entities.goal.WeightGoalEntity
import com.fitpath.app.services.goal.WeightGoalService
import org.springframework.web.bind.annotation.*
import java.util.UUID

@RestController
@RequestMapping("/{user}")
class WeightGoalController(private val weightGoalService: WeightGoalService) {
    @PostMapping("/create_weight_goal")
    fun createWeightGoal(@PathVariable user: UUID, @RequestBody weightGoalDTO: WeightGoalDTO): WeightGoalEntity {
        return weightGoalService.createWeightGoal(user, weightGoalDTO)
    }

    @GetMapping("/my_weight_goal")
    fun getMyGoalByCreatorId(@PathVariable user: UUID): WeightGoalDTO? {
        return weightGoalService.getGoalByCreatorId(user)
    }
}