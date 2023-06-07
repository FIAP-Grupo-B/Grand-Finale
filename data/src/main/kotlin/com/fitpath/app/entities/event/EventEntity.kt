package com.fitpath.app.entities.event

import jakarta.persistence.*

@Entity
@Table(name = "tb_fpt_event")
data class EventEntity(
                        @Id
                        @GeneratedValue(strategy = GenerationType.IDENTITY)
                        @Column(name = "id")
                        var id: Int? = null,

                        @Column(name = "user_id", nullable = false)
                        var creatorId: ByteArray,

                        @Column(name = "type", nullable = false)
                        var type: String,

                        @Column(name = "name", nullable = false)
                        var name: String,

                        @Column(name = "locale", nullable = false)
                        var locale: String,

                        @Column(name = "description", nullable = false)
                        var description: String
                        ) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as EventEntity

        if (!creatorId.contentEquals(other.creatorId)) return false

        return true
    }

    override fun hashCode(): Int {
        return creatorId.contentHashCode()
    }

}
