export default function stringifySpheres (spheres) {
  if (spheres.length === 1) return spheres[0]
  const [lastSphere] = spheres.splice(-1, 1)
  return `${spheres.join(', ')} and ${lastSphere}`
}
