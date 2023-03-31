package com.fitpath.app.entities

import jakarta.persistence.*

@Entity
@Table(name = "tb_fpt_user")
data class UserEntity(
                        @Id
                        @GeneratedValue(strategy = GenerationType.IDENTITY)
                        @Column(name = "cod_id")
                        var id: Int? = null,

                        @Column(name = "des_first_name", nullable = false)
                        var firstName: String,

                        @Column(name = "des_last_name", nullable = false)
                        var lastName: String,

                        @Column(name = "des_email", nullable = false)
                        var email: String,

                        @Column(name = "des_url_avatar")
                        var avatarUrl: String?
                        ) {
}
