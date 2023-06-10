package com.fitpath.app.repositories.user

import com.fitpath.app.entities.user.ConnectionEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface ConnectionRepository: JpaRepository<ConnectionEntity, Long> {
/*
    @Query("SELECT c FROM tb_fpt_connection c WHERE c.user_id2 = :userId AND c.status = false")
    fun findPendingRequests(@Param("userId") userId: ByteArray): List<ConnectionEntity>?
*/
}

