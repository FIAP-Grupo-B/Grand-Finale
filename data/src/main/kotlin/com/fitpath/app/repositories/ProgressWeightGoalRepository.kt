package com.fitpath.app.repositories

import com.fitpath.app.entities.goal.progress.ProgressWeightGoalEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProgressWeightGoalRepository: JpaRepository<ProgressWeightGoalEntity, Long> {

}