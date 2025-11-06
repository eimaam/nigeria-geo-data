/**
 * Core region functions for querying Nigerian geopolitical regions
 */

import type { Region, State, RegionStats } from '../types';
import { REGIONS } from '../types';
import { STATES, LGAS } from '../data/nigeriaData';

/**
 * Get all geopolitical regions in Nigeria
 * 
 * @returns Array of all 6 regions
 * 
 * @example
 * ```ts
 * const regions = getAllRegions();
 * console.log(regions); 
 * // ['North-Central', 'North-East', 'North-West', 'South-East', 'South-South', 'South-West']
 * ```
 */
export function getAllRegions(): readonly Region[] {
  return REGIONS;
}

/**
 * Get all states in a specific region
 * 
 * @param region - Region name
 * @returns Array of states in the region
 * 
 * @example
 * ```ts
 * const southWest = getRegionStates('South-West');
 * console.log(southWest.map(s => s.name));
 * // ['Ekiti', 'Lagos', 'Ogun', 'Ondo', 'Osun', 'Oyo']
 * ```
 */
export function getRegionStates(region: Region): State[] {
  return STATES.filter(state => state.region === region);
}

/**
 * Get the region that a state belongs to
 * 
 * @param stateCode - State code
 * @returns Region name or null if state not found
 * 
 * @example
 * ```ts
 * const region = getRegionByState('LA');
 * console.log(region); // 'South-West'
 * ```
 */
export function getRegionByState(stateCode: string): Region | null {
  if (!stateCode) return null;
  
  const state = STATES.find(s => s.code.toUpperCase() === stateCode.toUpperCase());
  return state?.region ?? null;
}

/**
 * Get statistics for a specific region
 * Includes state count, LGA count, and list of states
 * 
 * @param region - Region name
 * @returns Region statistics object
 * 
 * @example
 * ```ts
 * const stats = getRegionStats('South-West');
 * console.log(stats.stateCount); // 6
 * console.log(stats.lgaCount); // 137
 * ```
 */
export function getRegionStats(region: Region): RegionStats {
  const states = getRegionStates(region);
  const stateCodes = states.map(s => s.code);
  const lgaCount = LGAS.filter(lga => stateCodes.includes(lga.state)).length;

  return {
    region,
    stateCount: states.length,
    lgaCount,
    states,
  };
}

/**
 * Get statistics for all regions
 * 
 * @returns Array of statistics for each region
 * 
 * @example
 * ```ts
 * const allStats = getAllRegionStats();
 * allStats.forEach(stat => {
 *   console.log(`${stat.region}: ${stat.stateCount} states, ${stat.lgaCount} LGAs`);
 * });
 * ```
 */
export function getAllRegionStats(): RegionStats[] {
  return REGIONS.map(region => getRegionStats(region));
}

/**
 * Check if a region name is valid
 * 
 * @param region - Region name to validate
 * @returns true if the region is valid
 * 
 * @example
 * ```ts
 * console.log(isValidRegion('South-West')); // true
 * console.log(isValidRegion('South-Middle')); // false
 * ```
 */
export function isValidRegion(region: string): region is Region {
  return REGIONS.includes(region as Region);
}

/**
 * Get the count of states in a region
 * 
 * @param region - Region name
 * @returns Number of states in the region
 * 
 * @example
 * ```ts
 * console.log(getRegionStateCount('South-West')); // 6
 * ```
 */
export function getRegionStateCount(region: Region): number {
  return STATES.filter(state => state.region === region).length;
}

/**
 * Get the count of LGAs in a region
 * 
 * @param region - Region name
 * @returns Number of LGAs in the region
 * 
 * @example
 * ```ts
 * console.log(getRegionLGACount('South-West')); // 137
 * ```
 */
export function getRegionLGACount(region: Region): number {
  const stateCodes = STATES
    .filter(state => state.region === region)
    .map(s => s.code);
  
  return LGAS.filter(lga => stateCodes.includes(lga.state)).length;
}
