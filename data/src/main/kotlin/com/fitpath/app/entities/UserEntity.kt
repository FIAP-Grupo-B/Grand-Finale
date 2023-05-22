package com.fitpath.app.entities

import jakarta.persistence.*
import java.util.UUID

@Entity
@Table(name = "tb_fpt_user")
data class UserEntity(
                        @Id
                        @GeneratedValue(generator = "UUID")
                        @Column(name = "id")
                        var id: UUID? = UUID.randomUUID(),

                        @Column(name = "email", nullable = false)
                        var email: String,

                        @Column(name = "password")
                        var password: String,

                        @Column(name = "name", nullable = false)
                        var name: String,

                        @Column(name = "last_name", nullable = false)
                        var lastName: String,

                        @Column(name = "url_avatar")
                        var avatarUrl: String? = null
                        ) {
    //constructor(id: UUID, email: String, firstName: String, lastName: String, avatarUrl: String) : this(id, email, "", firstName, lastName, avatarUrl)
}
