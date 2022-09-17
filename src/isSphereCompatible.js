import spheresInfo from "./data/spheres"

export default function isSphereCompatible (sphereOne, sphereTwo) {
  if (sphereOne === sphereTwo) return false

  const sphereOneInfo = spheresInfo[sphereOne]
  const sphereTwoInfo = spheresInfo[sphereTwo]

  if (sphereOneInfo.conflicting.includes(sphereTwo) === true) return false
  if (sphereTwoInfo.conflicting.includes(sphereOne) === true) return false

  return true
}
