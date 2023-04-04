package com.fitpath.app.dto

import java.util.UUID

class UserDTO(
    val id: UUID? = null,
    val email: String,
    val password: String,
    val firstName: String,
    val lastName: String,
    val middleName: String?,
    val avatarUrl: String?
){
    constructor(id: UUID,
                email: String,
                firstName: String,
                lastName: String,
                middleName: String?,
                avatarUrl: String?) : this(
                                            id!!,
                                            email,
                                            "",
                                            firstName,
                                            lastName,
                                            middleName,
                                            avatarUrl){

    }
}
