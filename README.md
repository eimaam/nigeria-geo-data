# 🇳🇬 Nigeria Geo Data

> A lightweight, zero-dependency JavaScript SDK for Nigerian states, LGAs, and geopolitical data

[![npm version](https://img.shields.io/npm/v/nigeria-geo-data.svg)](https://www.npmjs.com/package/nigeria-geo-data)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

## ✨ Features

- 🚀 **Zero Dependencies** - Lightweight and fast
- 📦 **37 States + FCT** - All Nigerian states and Federal Capital Territory
- 🏛️ **774 LGAs** - Complete list of Local Government Areas
- 🗺️ **6 Geopolitical Regions** - Query by regions
- 🔍 **Fast Search** - Search states and LGAs instantly
- 💪 **TypeScript Support** - Fully typed for better DX
- 🌲 **Tree-shakeable** - Import only what you need
- ⚡ **Offline-first** - No API calls, all data embedded
- 🌍 **Universal** - Works in Node.js, browsers, React, Vue, Next.js, etc.

## 📦 Installation

```bash
npm install nigeria-geo-data
```

```bash
yarn add nigeria-geo-data
```

```bash
pnpm add nigeria-geo-data
```

## 🚀 Quick Start

### ES Modules (Recommended)

```typescript
import { getAllStates, getStateByCode, getLGAsByState } from 'nigeria-geo-data';

// Get all states
const states = getAllStates();
console.log(states.length); // 37

// Get specific state
const lagos = getStateByCode('LA');
console.log(lagos.capital); // "Ikeja"

// Get LGAs for a state
const lagosLGAs = getLGAsByState('LA');
console.log(lagosLGAs.length); // 20
```

### CommonJS

```javascript
const { getAllStates, getStateByCode } = require('nigeria-geo-data');

const lagos = getStateByCode('LA');
console.log(lagos);
```

## 📚 API Reference

### State Functions

#### `getAllStates()`
Get all Nigerian states (37 including FCT).

```typescript
const states = getAllStates();
// Returns: State[]
```

#### `getStateByCode(code: string)`
Get a state by its two-letter code.

```typescript
const lagos = getStateByCode('LA');
// Returns: State | null
// {
//   name: 'Lagos',
//   capital: 'Ikeja',
//   code: 'LA',
//   region: 'South-West'
// }
```

#### `getStateByName(name: string)`
Get a state by its name (case-insensitive).

```typescript
const lagos = getStateByName('Lagos');
// Returns: State | null
```

#### `getStatesByRegion(region: Region)`
Get all states in a specific geopolitical region.

```typescript
const southWestStates = getStatesByRegion('South-West');
// Returns: State[]
// ['Ekiti', 'Lagos', 'Ogun', 'Ondo', 'Osun', 'Oyo']
```

#### `getStateCapital(stateCode: string)`
Get the capital city of a state.

```typescript
const capital = getStateCapital('LA');
// Returns: string | null
// "Ikeja"
```

#### `isValidStateCode(code: string)`
Check if a state code is valid. 
Returns a boolean

```typescript
console.log(isValidStateCode('LA')); // true
console.log(isValidStateCode('XY')); // false
```

#### `getStateWithLGAs(stateCode: string)`
Get a state with all its LGAs included.

```typescript
const lagosWithLGAs = getStateWithLGAs('LA');
// Returns: StateWithLGAs | null
// {
//   name: 'Lagos',
//   capital: 'Ikeja',
//   code: 'LA',
//   region: 'South-West',
//   lgas: [...], // Array of LGA objects
//   lgaCount: 20
// }
```

#### `searchStates(query: string)`
Search states by name (partial match, case-insensitive).

```typescript
const results = searchStates('Ondo');
// Returns: State[]
```

#### `getStateRegion(stateCode: string)`
Get the region a state belongs to.

```typescript
const region = getStateRegion('LA');
// Returns: Region | null
// "South-West"
```

---

### LGA Functions

#### `getAllLGAs()`
Get all LGAs in Nigeria (774 total).

```typescript
const lgas = getAllLGAs();
// Returns: LGA[]
```

#### `getLGAsByState(stateCode: string)`
Get all LGAs in a specific state by state code.

```typescript
const lagosLGAs = getLGAsByState('LA');
// Returns: LGA[]
// [
//   { name: 'Agege', state: 'LA' },
//   { name: 'Ajeromi-Ifelodun', state: 'LA' },
//   ...
// ]
```

#### `getLGAsByStateName(stateName: string)`
Get all LGAs in a specific state by state name.

```typescript
const lagosLGAs = getLGAsByStateName('Lagos');
// Returns: LGA[]
```

#### `searchLGAs(query: string)`
Search LGAs by name across all states.

```typescript
const results = searchLGAs('Ikeja');
// Returns: LGA[]
// [{ name: 'Ikeja', state: 'LA' }]
```

#### `getLGACount(stateCode?: string)`
Get the total count of LGAs, optionally filtered by state.

```typescript
console.log(getLGACount()); // 774
console.log(getLGACount('LA')); // 20
```

#### `lgaExists(lgaName: string, stateCode: string)`
Check if an LGA exists in a specific state.

```typescript
console.log(lgaExists('Ikeja', 'LA')); // true
console.log(lgaExists('Ikeja', 'KN')); // false
```

#### `getLGAByName(lgaName: string)`
Get the first LGA that matches a name.

```typescript
const lga = getLGAByName('Ikeja');
// Returns: LGA | null
```

#### `getAllLGAsByName(lgaName: string)`
Get all LGAs with a specific name (some LGA names appear in multiple states).

```typescript
const lgas = getAllLGAsByName('Obi');
// Returns: LGA[]
```

---

### Region Functions

#### `getAllRegions()`
Get all geopolitical regions (6 total).

```typescript
const regions = getAllRegions();
// Returns: Region[]
// ['North-Central', 'North-East', 'North-West', 'South-East', 'South-South', 'South-West']
```

#### `getRegionStates(region: Region)`
Get all states in a specific region.

```typescript
const southWestStates = getRegionStates('South-West');
// Returns: State[]
```

#### `getRegionByState(stateCode: string)`
Get the region that a state belongs to.

```typescript
const region = getRegionByState('LA');
// Returns: Region | null
// "South-West"
```

#### `getRegionStats(region: Region)`
Get statistics for a specific region.

```typescript
const stats = getRegionStats('South-West');
// Returns: RegionStats
// {
//   region: 'South-West',
//   stateCount: 6,
//   lgaCount: 137,
//   states: [...]
// }
```

#### `getAllRegionStats()`
Get statistics for all regions.

```typescript
const allStats = getAllRegionStats();
// Returns: RegionStats[]
```

#### `isValidRegion(region: string)`
Check if a region name is valid.

```typescript
console.log(isValidRegion('South-West')); // true
console.log(isValidRegion('South-Middle')); // false
```

#### `getRegionStateCount(region: Region)`
Get the number of states in a region.

```typescript
console.log(getRegionStateCount('South-West')); // 6
```

#### `getRegionLGACount(region: Region)`
Get the number of LGAs in a region.

```typescript
console.log(getRegionLGACount('South-West')); // 137
```

---

### Metadata

Access library metadata:

```typescript
import { METADATA } from 'nigeria-geo-data';

console.log(METADATA.totalStates); // 37
console.log(METADATA.totalLGAs); // 774
console.log(METADATA.regions); // Array of all regions
```

---

## 🔤 TypeScript Support

Full TypeScript support with exported types:

```typescript
import type { State, LGA, Region, StateWithLGAs, RegionStats } from 'nigeria-geo-data';

const state: State = {
  name: 'Lagos',
  capital: 'Ikeja',
  code: 'LA',
  region: 'South-West'
};

const lga: LGA = {
  name: 'Ikeja',
  state: 'LA'
};

const region: Region = 'South-West';
```

## 🎯 Use Cases

### Form Dropdowns
```typescript
import { getAllStates, getLGAsByState } from 'nigeria-geo-data';

// State dropdown
const StateSelect = () => {
  const states = getAllStates();
  
  return (
    <select>
      {states.map(state => (
        <option key={state.code} value={state.code}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

// LGA dropdown based on selected state
const LGASelect = ({ stateCode }) => {
  const lgas = getLGAsByState(stateCode);
  
  return (
    <select>
      {lgas.map(lga => (
        <option key={lga.name} value={lga.name}>
          {lga.name}
        </option>
      ))}
    </select>
  );
};
```

### Address Validation
```typescript
import { isValidStateCode, lgaExists } from 'nigeria-geo-data';

function validateAddress(stateCode: string, lgaName: string) {
  if (!isValidStateCode(stateCode)) {
    return { valid: false, error: 'Invalid state code' };
  }
  
  if (!lgaExists(lgaName, stateCode)) {
    return { valid: false, error: 'LGA does not exist in this state' };
  }
  
  return { valid: true };
}
```

### Search & Autocomplete
```typescript
import { searchStates, searchLGAs } from 'nigeria-geo-data';

function searchLocation(query: string) {
  const states = searchStates(query);
  const lgas = searchLGAs(query);
  
  return { states, lgas };
}
```

### Regional Analytics
```typescript
import { getAllRegionStats } from 'nigeria-geo-data';

const stats = getAllRegionStats();
stats.forEach(stat => {
  console.log(`${stat.region}:`);
  console.log(`  States: ${stat.stateCount}`);
  console.log(`  LGAs: ${stat.lgaCount}`);
});
```

## 📊 Data Coverage

- **States**: 37 (including FCT Abuja)
- **LGAs**: 774
- **Regions**: 6 (North-Central, North-East, North-West, South-East, South-South, South-West)
- **State Codes**: All 37 two-letter codes

## 🤝 Contributing

Contributions are 100% welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Imam Dahir](https://github.com/eimaam)

## 🔗 Links

- [GitHub Repository](https://github.com/eimaam/nigeria-states-lga-api)
- [NPM Package](https://www.npmjs.com/package/nigeria-geo-data)
- [Issues](https://github.com/eimaam/nigeria-states-lga-api/issues)

---

Made with 💚 for Nigeria 🇳🇬
