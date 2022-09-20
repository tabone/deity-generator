# Deity Generator

Generates a random Dwarf Fortress Deity.

## Installation

```bash
npm install --save deity-generator
```

## Usage

```javascript
import { Deity } from 'deity-generator'

const deity = new Deity('seed')

console.log(deity.name)         // => ak Upuh
console.log(deity.gender)       // => male
console.log(deity.spheres)      // => [ 'rulership', 'jealousy' ]
console.log(deity.creature)     // => cave swallow
console.log(deity.toString())   // => ak Upuh most often takes the form of a male cave swallow and is associated with rulership and jealousy.
```

## Deity API

### new Deity([seed:`string`]) => `Deity`
### .name() => `string`
### .gender() => `string`
### .spheres() => `string`
### .creature() => `string`
### .toString() => `string`

# References

- [DF2014:Deity](https://dwarffortresswiki.org/index.php/DF2014:Deity)
- [DF2014:Creature](https://dwarffortresswiki.org/index.php/DF2014:Creature)
- [DF2014:Animals](https://dwarffortresswiki.org/index.php/Category:DF2014:Animals)
- [DF2014:Deity](https://dwarffortresswiki.org/index.php/DF2014:Vermin)
