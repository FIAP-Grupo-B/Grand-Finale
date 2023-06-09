package com.fitpath.app.repositories.user

import com.fitpath.app.entities.user.UserEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository: JpaRepository<UserEntity, UUID> {
    fun findUserByEmail(email: String?): UserEntity
    fun findById(userId: ByteArray?): UserEntity

}
