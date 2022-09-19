# Deity Generator

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
