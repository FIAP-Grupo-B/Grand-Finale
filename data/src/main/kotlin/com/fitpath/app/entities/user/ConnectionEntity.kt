package com.fitpath.app.entities.user

import jakarta.persistence.*
import java.time.LocalDateTime
import java.util.Date

@Entity
@Table(name = "tb_fpt_connection")
data class ConnectionEntity(

    @Id
    @Column(name = "user_id1")
    var idUser1: ByteArray? = null,

    @Column(name = "user_id2")
    var idUser2: ByteArray? = null,

    @Column(name = "status")
    var status: Boolean? = null,

    @Column(name = "date_connection")
    var dateConnection: Date? = null,
){
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as ConnectionEntity

        if (idUser1 != null) {
            if (other.idUser1 == null) return false
            if (!idUser1.contentEquals(other.idUser1)) return false
        } else if (other.idUser1 != null) return false
        if (idUser2 != null) {
            if (other.idUser2 == null) return false
            if (!idUser2.contentEquals(other.idUser2)) return false
        } else if (other.idUser2 != null) return false

        return true
    }

    override fun hashCode(): Int {
        var result = idUser1?.contentHashCode() ?: 0
        result = 31 * result + (idUser2?.contentHashCode() ?: 0)
        return result
    }

}
