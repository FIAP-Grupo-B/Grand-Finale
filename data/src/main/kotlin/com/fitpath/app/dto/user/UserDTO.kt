package com.fitpath.app.dto.user

import java.util.UUID

class UserDTO(
    val id: UUID? = null,
    val email: String,
    val password: String,
    val name: String,
    val lastName: String,
    val avatarUrl: String?
){
    constructor(id: UUID, email: String, name: String, lastName: String, avatarUrl: String?)
            : this(id!!, email, "", name, lastName, avatarUrl){

    }
}
