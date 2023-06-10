package com.fitpath.app.entities.user

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "tb_fpt_connection")
data class ConnectionEntity(

    @Id
    @Column(name = "user_id1")
    var userId1: ByteArray? = null,

    @Column(name = "user_id2")
    var userId2: ByteArray? = null,

    @Column(name = "status")
    var status: Boolean? = null,

    @Column(name = "date_connection")
    var dateConnection: LocalDateTime? = null,
){
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as ConnectionEntity

        if (userId1 != null) {
            if (other.userId1 == null) return false
            if (!userId1.contentEquals(other.userId1)) return false
        } else if (other.userId1 != null) return false
        if (userId2 != null) {
            if (other.userId2 == null) return false
            if (!userId2.contentEquals(other.userId2)) return false
        } else if (other.userId2 != null) return false

        return true
    }

    override fun hashCode(): Int {
        var result = userId1?.contentHashCode() ?: 0
        result = 31 * result + (userId2?.contentHashCode() ?: 0)
        return result
    }

}
