/**
 * Core LGA functions for querying Nigerian Local Government Areas
 */

import type { LGA } from '../types';
import { LGAS, LGAS_BY_STATE, STATE_BY_CODE } from '../data/nigeriaData';

/**
 * Get all LGAs in Nigeria
 * 
 * @returns Array of all 774 LGAs
 * 
 * @example
 * ```ts
 * const lgas = getAllLGAs();
 * console.log(lgas.length); // 774
 * ```
 */
export function getAllLGAs(): LGA[] {
  return [...LGAS];
}

/**
 * Get all LGAs in a specific state by state code
 * 
 * @param stateCode - Two-letter state code
 * @returns Array of LGAs in the state
 * 
 * @example
 * ```ts
 * const lagosLGAs = getLGAsByState('LA');
 * console.log(lagosLGAs.length); // 20
 * ```
 */
export function getLGAsByState(stateCode: string): LGA[] {
  if (!stateCode) return [];
  return LGAS_BY_STATE.get(stateCode.toUpperCase()) ?? [];
}

/**
 * Get all LGAs in a specific state by state name
 * 
 * @param stateName - State name (case-insensitive)
 * @returns Array of LGAs in the state
 * 
 * @example
 * ```ts
 * const lagosLGAs = getLGAsByStateName('Lagos');
 * console.log(lagosLGAs[0].name); // 'Agege'
 * ```
 */
export function getLGAsByStateName(stateName: string): LGA[] {
  if (!stateName) return [];
  
  // Find the state first
  const state = Array.from(STATE_BY_CODE.values()).find(
    s => s.name.toLowerCase() === stateName.toLowerCase()
  );
  
  if (!state) return [];
  return LGAS_BY_STATE.get(state.code) ?? [];
}

/**
 * Search LGAs by name (partial match, case-insensitive)
 * Searches across all states
 * 
 * @param query - Search query
 * @returns Array of matching LGAs
 * 
 * @example
 * ```ts
 * const results = searchLGAs('Ikeja');
 * console.log(results[0].name); // 'Ikeja'
 * console.log(results[0].state); // 'LA'
 * ```
 */
export function searchLGAs(query: string): LGA[] {
  if (!query) return [];
  
  const lowerQuery = query.toLowerCase();
  return LGAS.filter(lga => 
    lga.name.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get the total count of LGAs
 * Optionally filter by state
 * 
 * @param stateCode - Optional state code to count LGAs for
 * @returns Total number of LGAs
 * 
 * @example
 * ```ts
 * console.log(getLGACount()); // 774
 * console.log(getLGACount('LA')); // 20
 * ```
 */
export function getLGACount(stateCode?: string): number {
  if (stateCode) {
    const lgas = LGAS_BY_STATE.get(stateCode.toUpperCase());
    return lgas?.length ?? 0;
  }
  return LGAS.length;
}

/**
 * Check if an LGA exists in a specific state
 * 
 * @param lgaName - Name of the LGA (case-insensitive)
 * @param stateCode - State code
 * @returns true if the LGA exists in the state
 * 
 * @example
 * ```ts
 * console.log(lgaExists('Ikeja', 'LA')); // true
 * console.log(lgaExists('Ikeja', 'KN')); // false
 * ```
 */
export function lgaExists(lgaName: string, stateCode: string): boolean {
  if (!lgaName || !stateCode) return false;
  
  const lgas = LGAS_BY_STATE.get(stateCode.toUpperCase());
  if (!lgas) return false;
  
  return lgas.some(lga => lga.name.toLowerCase() === lgaName.toLowerCase());
}

/**
 * Get LGA details by exact name
 * Returns the first matching LGA (if multiple states have same LGA name)
 * 
 * @param lgaName - Exact LGA name (case-insensitive)
 * @returns LGA object or null if not found
 * 
 * @example
 * ```ts
 * const lga = getLGAByName('Ikeja');
 * console.log(lga?.state); // 'LA'
 * ```
 */
export function getLGAByName(lgaName: string): LGA | null {
  if (!lgaName) return null;
  
  const lowerName = lgaName.toLowerCase();
  return LGAS.find(lga => lga.name.toLowerCase() === lowerName) ?? null;
}

/**
 * Get all LGAs that match a specific name across all states
 * Useful for LGA names that appear in multiple states
 * 
 * @param lgaName - LGA name (case-insensitive)
 * @returns Array of matching LGAs
 * 
 * @example
 * ```ts
 * const results = getAllLGAsByName('Obi');
 * // Returns all LGAs named 'Obi' in different states
 * ```
 */
export function getAllLGAsByName(lgaName: string): LGA[] {
  if (!lgaName) return [];
  
  const lowerName = lgaName.toLowerCase();
  return LGAS.filter(lga => lga.name.toLowerCase() === lowerName);
}
