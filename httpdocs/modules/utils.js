import base62 from '@sindresorhus/base62'
import crypto from 'crypto'

export function generateObservatoryId(observatoryName) {
  // Create a hash from the observatory name and a random number
  const hash = crypto.createHash('sha256')
  hash.update(observatoryName)
  hash.update(Math.random().toString())

  // Take first 8 bytes of the hash and convert to a BigInt
  const buffer = hash.digest()
  const num = buffer.readBigUInt64BE(0)

  // Encode to base62
  return base62.encodeBigInt(num).slice(0, 6)
}
