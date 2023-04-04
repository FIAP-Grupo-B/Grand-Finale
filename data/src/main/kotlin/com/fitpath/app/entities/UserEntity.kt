package com.fitpath.app.entities

import jakarta.persistence.*
import java.util.UUID

@Entity
@Table(name = "tb_fpt_user")
data class UserEntity(
                        @Id
                        @GeneratedValue(generator = "UUID")
                        @Column(name = "cod_id")
                        var id: UUID? = UUID.randomUUID(),

                        @Column(name = "des_email", nullable = false)
                        var email: String,

                        @Column(name = "des_password")
                        var password: String,

                        @Column(name = "des_first_name", nullable = false)
                        var firstName: String,

                        @Column(name = "des_last_name", nullable = false)
                        var lastName: String,

                        @Column(name = "des_middle_name")
                        var middleName: String? = null,

                        @Column(name = "des_url_avatar")
                        var avatarUrl: String? = null,
                        ) {
    constructor(id: UUID, email: String, firstName: String, lastName: String, middleName: String, avatarUrl: String) : this(id, email, firstName, middleName, lastName, middleName, avatarUrl)
}
