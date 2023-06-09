package com.fitpath.app.entities.user

import com.fitpath.app.dto.user.UserDTO
import jakarta.persistence.*

@Entity
@Table(name = "tb_fpt_user")
data class UserEntity(
    @Id
    @Column(name = "id")
    var id: ByteArray?,

    @Column(name = "email", nullable = false)
    var email: String?,

    @Column(name = "password")
    var password: String?,

    @Column(name = "name", nullable = false)
    var name: String?,

    @Column(name = "last_name", nullable = false)
    var lastName: String?,

    @Column(name = "url_avatar")
    var avatarUrl: String? = null,

    @Column(name = "locale")
    var locale: String? = null,

    @Column(name = "description")
    var description: String? = null)
{
    constructor(email: String, name: String, lastName: String, avatarUrl: String, locale: String, description: String):
            this(null, email, null, name, lastName, avatarUrl, locale, description){
            }

    fun alterInformations(userDTO: UserDTO) {
        this.email = userDTO.email
        this.password = userDTO.password
        this.name = userDTO.name
        this.lastName = userDTO.lastName
        this.avatarUrl = userDTO.avatarUrl
        this.locale = userDTO.locale
        this.description = userDTO.description
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as UserEntity

        if (id != null) {
            if (other.id == null) return false
            if (!id.contentEquals(other.id)) return false
        } else if (other.id != null) return false

        return true
    }

    override fun hashCode(): Int {
        return id?.contentHashCode() ?: 0
    }

}

