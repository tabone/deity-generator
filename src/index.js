import randomGenerator from 'random-seed'
import { makeRandomLanguage } from 'language-generator'

import creatures from "./data/creatures"
import getSpheres from './getSpheres'

export function createDeity (seed = (new Date()).getTime()) {
  const rand = randomGenerator(seed)
  const language = makeRandomLanguage(seed)

  const name = language.makeName('name')
  const gender = rand() > .5 ? 'male' : 'female'
  const creature = creatures[rand(creatures.length)]
  const spheres = getSpheres(rand)

  return `${name} most often takes the form of a ${gender} ${creature} and is associated with ${spheres}.`
}
