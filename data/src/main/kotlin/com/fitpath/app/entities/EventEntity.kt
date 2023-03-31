package com.fitpath.app.entities

import jakarta.persistence.*

@Entity
@Table(name = "tb_fpt_event")
data class EventEntity(
                        @Id
                        @GeneratedValue(strategy = GenerationType.IDENTITY)
                        @Column(name = "cod_id")
                        var id: Int? = null,

                        @Column(name = "cod_id_user", nullable = false)
                        var creatorId: Int,

                        @Column(name = "des_type", nullable = false)
                        var type: String,

                        @Column(name = "des_name", nullable = false)
                        var name: String,

                        @Column(name = "des_locale", nullable = false)
                        var locale: String,

                        @Column(name = "des_description", nullable = false)
                        var description: String
                        ) {

}
