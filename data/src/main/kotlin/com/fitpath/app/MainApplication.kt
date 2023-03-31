package com.fitpath.app

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MainApplication

//MAIN FUNCTION OF A SPRING BOOT PROJECT WITH KOTLIN
fun main(args: Array<String>) {
	runApplication<MainApplication>(*args)
}
