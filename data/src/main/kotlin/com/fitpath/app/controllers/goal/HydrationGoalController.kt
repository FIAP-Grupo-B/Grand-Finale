package com.fitpath.app.controllers.goal

import com.fitpath.app.dto.goal.HydrationGoalDTO
import com.fitpath.app.entities.goal.HydrationGoalEntity
import com.fitpath.app.services.goal.HydrationGoalService
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
@RequestMapping("/{user}")
class HydrationGoalController(private val hydrationGoalService: HydrationGoalService) {
    @PostMapping("/create_hydration_goal")
    fun createWeightGoal(@PathVariable user: UUID, @RequestBody hydrationGoalDTO: HydrationGoalDTO): HydrationGoalEntity {
        return hydrationGoalService.createWeightGoal(user, hydrationGoalDTO)
    }
}