package com.fitpath.app.util

import java.nio.ByteBuffer
import java.util.*

object UUIDConverter {

    fun uuidToBinary(uuid: UUID): ByteArray {
        val buffer = ByteBuffer.allocate(16)
        buffer.putLong(uuid.mostSignificantBits)
        buffer.putLong(uuid.leastSignificantBits)
        return buffer.array()
    }

    fun byteArrayToUUID(byteArray: ByteArray): UUID {
        val buffer = ByteBuffer.wrap(byteArray)
        val mostSigBits = buffer.long
        val leastSigBits = buffer.long
        return UUID(mostSigBits, leastSigBits)
    }

}
