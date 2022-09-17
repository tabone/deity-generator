import randomGenerator from 'random-seed'
import { makeRandomLanguage } from 'language-generator'

import creatures from "./data/creatures"
import spheresInfo from "./data/spheres"

const spheres = Object.keys(spheresInfo)

export function createDeity (seed = (new Date()).getTime()) {
  const rand = randomGenerator(seed)
  const language = makeRandomLanguage(seed)

  const name = language.makeName('name')
  const gender = rand() > .5 ? 'male' : 'female'
  const creature = creatures[rand(creatures.length)]

  const baseSpheresAmount = rand(2) + 1
  const baseSpheres = []

  while (baseSpheres.length < baseSpheresAmount) {
    const potentialSphere = spheres[rand(spheres.length)]

    if (
      baseSpheres.every(
        baseSphere => isSphereCompatible(baseSphere, potentialSphere)
      ) === false
    ) continue

    baseSpheres.push(potentialSphere)
  }

  const potentialFriendlySpheres = [
    ...new Set(
      baseSpheres.reduce(
        (potentialFriendlySpheres, sphere) => {
          return [
            ...potentialFriendlySpheres,
            ...spheresInfo[sphere].compatible
          ]
        }, []
      )
    )
  ]

  const friendlySpheresAmount = Math.min(
    rand(3),
    potentialFriendlySpheres.length
  )

  for (let index = 0; index < friendlySpheresAmount; index++) {
    const potentialFriendlySpherePosition = rand(
      potentialFriendlySpheres.length
    )

    const potentialSphere = potentialFriendlySpheres[
      potentialFriendlySpherePosition
    ]

    potentialFriendlySpheres.splice(potentialFriendlySpherePosition, 1)

    if (
      baseSpheres.some(
        baseSphere => isSphereCompatible(potentialSphere, baseSphere)
      ) === false
    ) continue

    baseSpheres.push(potentialSphere)
  }

  return `${name} most often takes the form of a ${gender} ${creature} and is associated with ${getSphereDescription(baseSpheres)}.`
}

function isSphereCompatible (sphereOne, sphereTwo) {
  if (sphereOne === sphereTwo) return false

  const sphereOneInfo = spheresInfo[sphereOne]
  const sphereTwoInfo = spheresInfo[sphereTwo]

  if (sphereOneInfo.conflicting.includes(sphereTwo) === true) return false
  if (sphereTwoInfo.conflicting.includes(sphereOne) === true) return false
  return true
}

function getSphereDescription (sphereProps) {
  const spheres = sphereProps.map(sphere => sphere.toLowerCase())
  if (spheres.length === 1) return spheres
  const [lastSphere] = spheres.splice(-1, 1)
  return `${spheres.join(', ')} and ${lastSphere}`
}
