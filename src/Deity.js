import randomGenerator from 'random-seed'
import { makeRandomLanguage } from 'language-generator'

import creatures from "./data/creatures"
import getSpheres from './utils/getSpheres'
import stringifySpheres from './utils/stringifySpheres'

export default class Deity {
  constructor (props = {}) {
    const {
      seed = (new Date()).getTime()
    } = props

    const rand = randomGenerator(seed)
    const language = makeRandomLanguage(seed)

    this._name = language.makeName('name')
    this._gender = rand.random() > .5 ? 'male' : 'female'
    this._creature = creatures[rand(creatures.length)]
    this._spheres = getSpheres(rand)
  }

  get name () {
    return this._name
  }

  get gender () {
    return this._gender
  }

  get creature () {
    return this._creature
  }

  get spheres () {
    return [...this._spheres]
  }

  toString () {
    return `${this._name} most often takes the form of a ${this._gender} ${this._creature} and is associated with ${stringifySpheres(this._spheres)}.`
  }
}
