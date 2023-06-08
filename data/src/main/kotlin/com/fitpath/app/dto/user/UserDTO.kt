package com.fitpath.app.dto.user

import java.util.UUID

class UserDTO(
    val id: ByteArray? = null,
    val email: String,
    val password: String,
    val name: String,
    val lastName: String,
    val avatarUrl: String?,
    val locale: String?,
    val description: String?
){
    constructor(id: ByteArray, email: String, name: String, lastName: String, avatarUrl: String?, locale: String?, description: String?)
            : this(id!!, email, "", name, lastName, avatarUrl, locale, description){

    }

}
