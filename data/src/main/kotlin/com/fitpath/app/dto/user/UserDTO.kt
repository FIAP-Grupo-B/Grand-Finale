package com.fitpath.app.dto.user

import java.util.UUID

class UserDTO(
    val id: UUID? = null,
    val email: String?,
    val password: String?,
    val name: String?,
    val lastName: String?,
    val avatarUrl: String?,
    val locale: String?,
    val description: String?
){
    constructor(id: UUID, email: String?, name: String?, lastName: String?, avatarUrl: String?, locale: String?, description: String?)
            : this(id, email, null, name, lastName, avatarUrl, locale, description){
    }

    constructor(email: String?, password: String?)
            : this(null, email!!, password!!, null, null, null, null, null){
    }

}
