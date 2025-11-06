/**
 * Nigeria Geo Data Library (Nigeria States and LGAs)
 * A lightweight JavaScript SDK for Nigerian states, LGAs, and geopolitical data
 * 
 * @packageDocumentation
 */

// Export all types
export type { State, LGA, Region, StateWithLGAs, RegionStats } from './types';
export { REGIONS } from './types';

// Export state functions
export {
  getAllStates,
  getStateByCode,
  getStateByName,
  getStatesByRegion,
  getStateCapital,
  isValidStateCode,
  getStateWithLGAs,
  searchStates,
  getStateRegion,
} from './core/states';

// Export LGA functions
export {
  getAllLGAs,
  getLGAsByState,
  getLGAsByStateName,
  searchLGAs,
  getLGACount,
  lgaExists,
  getLGAByName,
  getAllLGAsByName,
} from './core/lgas';

// Export region functions
export {
  getAllRegions,
  getRegionStates,
  getRegionByState,
  getRegionStats,
  getAllRegionStats,
  isValidRegion,
  getRegionStateCount,
  getRegionLGACount,
} from './core/regions';

// Export metadata
export { METADATA } from './data/nigeriaData';

