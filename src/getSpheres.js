import spheresInfo from "./data/spheres"
import isSphereCompatible from "./isSphereCompatible"

const spheres = Object.keys(spheresInfo)

export default function getSpheres (rand) {
  function chooseBaseSpheres () {
    const amount = rand(2) + 1
    const selectedSpheres = []

    while (selectedSpheres.length < amount) {
      const potentialSphere = spheres[rand(spheres.length)]

      if (
        selectedSpheres.every(
          selectedSphere => isSphereCompatible(selectedSphere, potentialSphere)
        ) === false
      ) continue

      selectedSpheres.push(potentialSphere)
    }

    return selectedSpheres
  }

  function chooseFriendlySpheres (selectedSpheresProp) {
    const selectedSpheres = [...selectedSpheresProp]

    const potentialFriendlySpheres = [
      ...new Set(
        selectedSpheres.reduce(
          (potentialFriendlySpheres, sphere) => {
            return [
              ...potentialFriendlySpheres,
              ...spheresInfo[sphere].compatible
            ]
          }, []
        )
      )
    ]

    const amount = Math.min(
      rand(3),
      potentialFriendlySpheres.length
    )

    for (let index = 0; index < amount; index++) {
      const potentialSpherePosition = rand(potentialFriendlySpheres.length)
      const potentialSphere = potentialFriendlySpheres[potentialSpherePosition]
      potentialFriendlySpheres.splice(potentialSpherePosition, 1)

      if (
        selectedSpheres.some(
          selectedSphere => isSphereCompatible(potentialSphere, selectedSphere)
        ) === false
      ) continue

      selectedSpheres.push(potentialSphere)
    }

    return selectedSpheres
  }

  const chosenSpheres = chooseFriendlySpheres(
    chooseBaseSpheres()
  ).map(sphere => sphere.toLowerCase())

  if (chosenSpheres.length === 1) return chosenSpheres[0]
  const [lastSphere] = chosenSpheres.splice(-1, 1)
  return `${chosenSpheres.join(', ')} and ${lastSphere}`
}
