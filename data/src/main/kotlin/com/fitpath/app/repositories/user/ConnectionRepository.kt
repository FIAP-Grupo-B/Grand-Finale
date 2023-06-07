package com.fitpath.app.repositories.user

import com.fitpath.app.entities.user.ConnectionEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface ConnectionRepository: JpaRepository<ConnectionEntity, Long> {
}