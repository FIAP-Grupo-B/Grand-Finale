package com.fitpath.app.dto

import com.fitpath.app.entities.UserEntity

class UserDTO ( val id: Int? = null,
                val firstName: String,
                val lastName: String,
                val email: String,
                val avatarUrl: String? = null
){

}