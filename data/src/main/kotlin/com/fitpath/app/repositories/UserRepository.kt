package com.fitpath.app.repositories

import com.fitpath.app.entities.UserEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository: JpaRepository<UserEntity, UUID> {
    fun findUserByEmail(email: String): UserEntity

}
