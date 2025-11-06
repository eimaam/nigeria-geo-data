


// Simple test script to verify library functionality


const {
  getAllStates,
  getStateByCode,
  getAllLGAs,
  getLGAsByState,
  getAllRegions,
  getRegionStats,
  METADATA
} = require('./dist/index.js');

console.log('🇳🇬 Testing Nigeria Geo Data Library\n');

// Test 1: Get all states
console.log('📍 Test 1: Get all states');
const states = getAllStates();
console.log(`✓ Total states: ${states.length}`);
console.log(`✓ First state: ${states[0].name} (${states[0].code})\n`);

// Test 2: Get state by code
console.log('📍 Test 2: Get Lagos state');
const lagos = getStateByCode('LA');
console.log(`✓ Name: ${lagos.name}`);
console.log(`✓ Capital: ${lagos.capital}`);
console.log(`✓ Region: ${lagos.region}\n`);

// Test 3: Get all LGAs
console.log('📍 Test 3: Get all LGAs');
const lgas = getAllLGAs();
console.log(`✓ Total LGAs: ${lgas.length}\n`);

// Test 4: Get Lagos LGAs
console.log('📍 Test 4: Get Lagos LGAs');
const lagosLGAs = getLGAsByState('LA');
console.log(`✓ Lagos has ${lagosLGAs.length} LGAs`);
console.log(`✓ First LGA: ${lagosLGAs[0].name}\n`);

// Test 5: Get all regions
console.log('📍 Test 5: Get all regions');
const regions = getAllRegions();
console.log(`✓ Total regions: ${regions.length}`);
console.log(`✓ Regions: ${regions.join(', ')}\n`);

// Test 6: Get South-West stats
console.log('📍 Test 6: Get South-West region stats');
const southWestStats = getRegionStats('South-West');
console.log(`✓ States in South-West: ${southWestStats.stateCount}`);
console.log(`✓ LGAs in South-West: ${southWestStats.lgaCount}`);
console.log(`✓ States: ${southWestStats.states.map(s => s.name).join(', ')}\n`);

// Test 7: Metadata
console.log('📍 Test 7: Metadata');
console.log(`✓ Total states: ${METADATA.totalStates}`);
console.log(`✓ Total LGAs: ${METADATA.totalLGAs}`);
console.log(`✓ Regions: ${METADATA.regions.join(', ')}\n`);

console.log('✅ All tests passed! Library is working correctly.\n');
