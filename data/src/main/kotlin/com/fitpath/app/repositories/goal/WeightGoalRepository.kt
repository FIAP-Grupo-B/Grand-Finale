package com.fitpath.app.repositories.goal

import com.fitpath.app.entities.goal.WeightGoalEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface WeightGoalRepository: JpaRepository<WeightGoalEntity, Long> {
     fun findByIdUser(idUser: ByteArray): WeightGoalEntity?
}