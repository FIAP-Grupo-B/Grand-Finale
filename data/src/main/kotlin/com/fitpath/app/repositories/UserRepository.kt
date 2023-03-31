package com.fitpath.app.repositories

import com.fitpath.app.entities.UserEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository: JpaRepository<UserEntity, Long> {
    fun findUserByEmail(email: String): UserEntity

}
