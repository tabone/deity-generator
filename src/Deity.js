import randomGenerator from 'random-seed'
import { makeRandomLanguage } from 'language-generator'

import creatures from './data/creatures'
import getSpheres from './utils/getSpheres'
import stringifySpheres from './utils/stringifySpheres'

export default class Deity {
  constructor(props = {}) {
    const { seed = new Date().getTime() } = props

    const rand = randomGenerator(seed)
    const language = makeRandomLanguage(seed)

    const {
      name = language.makeName('name'),
      gender = rand.random() > 0.5 ? 'male' : 'female',
      creature = creatures[rand(creatures.length)],
      spheres = getSpheres(rand)
    } = props

    this._name = name
    this._gender = gender
    this._spheres = spheres
    this._creature = creature
  }

  get name() {
    return this._name
  }

  get gender() {
    return this._gender
  }

  get creature() {
    return this._creature
  }

  get spheres() {
    return [...this._spheres]
  }

  toString() {
    return `${this._name} most often takes the form of a ${this._gender} ${
      this._creature
    } and is associated with ${stringifySpheres(this._spheres)}.`
  }
}
