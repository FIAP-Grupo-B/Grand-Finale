package com.fitpath.app.repositories.goal

import com.fitpath.app.entities.goal.HydrationGoalEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface HydrationGoalRepository: JpaRepository<HydrationGoalEntity, Long> {
    fun findByIdUser(idUser: ByteArray): HydrationGoalEntity

}