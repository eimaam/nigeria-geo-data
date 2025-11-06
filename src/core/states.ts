/**
 * Core state functions for querying Nigerian state data
 */

import type { State, Region, StateWithLGAs } from '../types';
import { STATES, STATE_BY_CODE, STATE_BY_NAME, LGAS_BY_STATE } from '../data/nigeriaData';

/**
 * Get all Nigerian states
 * 
 * @returns Array of all 37 states (including FCT)
 * 
 * @example
 * ```ts
 * const states = getAllStates();
 * console.log(states.length); // 37
 * ```
 */
export function getAllStates(): State[] {
  return [...STATES];
}

/**
 * Get a state by its two-letter code
 * 
 * @param code - State code (e.g., 'LA' for Lagos)
 * @returns State object or null if not found
 * 
 * @example
 * ```ts
 * const lagos = getStateByCode('LA');
 * console.log(lagos?.capital); // 'Ikeja'
 * ```
 */
export function getStateByCode(code: string): State | null {
  if (!code) return null;
  return STATE_BY_CODE.get(code.toUpperCase()) ?? null;
}

/**
 * Get a state by its name (case-insensitive)
 * 
 * @param name - State name (e.g., 'Lagos' or 'lagos')
 * @returns State object or null if not found
 * 
 * @example
 * ```ts
 * const lagos = getStateByName('Lagos');
 * console.log(lagos?.code); // 'LA'
 * ```
 */
export function getStateByName(name: string): State | null {
  if (!name) return null;
  return STATE_BY_NAME.get(name.toLowerCase()) ?? null;
}

/**
 * Get all states in a specific geopolitical region
 * 
 * @param region - Geopolitical region name
 * @returns Array of states in the region
 * 
 * @example
 * ```ts
 * const southWest = getStatesByRegion('South-West');
 * console.log(southWest.map(s => s.name)); 
 * // ['Ekiti', 'Lagos', 'Ogun', 'Ondo', 'Osun', 'Oyo']
 * ```
 */
export function getStatesByRegion(region: Region): State[] {
  return STATES.filter(state => state.region === region);
}

/**
 * Get a state's capital city
 * 
 * @param stateCode - State code
 * @returns Capital city name or null if state not found
 * 
 * @example
 * ```ts
 * const capital = getStateCapital('LA');
 * console.log(capital); // 'Ikeja'
 * ```
 */
export function getStateCapital(stateCode: string): string | null {
  const state = getStateByCode(stateCode);
  return state?.capital ?? null;
}

/**
 * Check if a state code is valid
 * 
 * @param code - State code to validate
 * @returns true if the code is valid, false otherwise
 * 
 * @example
 * ```ts
 * console.log(isValidStateCode('LA')); // true
 * console.log(isValidStateCode('XY')); // false
 * ```
 */
export function isValidStateCode(code: string): boolean {
  if (!code) return false;
  return STATE_BY_CODE.has(code.toUpperCase());
}

/**
 * Get a state with all its LGAs included
 * 
 * @param stateCode - State code
 * @returns State with LGAs array or null if not found
 * 
 * @example
 * ```ts
 * const lagos = getStateWithLGAs('LA');
 * console.log(lagos?.lgaCount); // 20
 * console.log(lagos?.lgas[0].name); // 'Agege'
 * ```
 */
export function getStateWithLGAs(stateCode: string): StateWithLGAs | null {
  const state = getStateByCode(stateCode);
  if (!state) return null;

  const lgas = LGAS_BY_STATE.get(stateCode) ?? [];

  return {
    ...state,
    lgas,
    lgaCount: lgas.length,
  };
}

/**
 * Search states by name (partial match, case-insensitive)
 * 
 * @param query - Search query
 * @returns Array of matching states
 * 
 * @example
 * ```ts
 * const results = searchStates('Ondo');
 * // Returns states containing 'Ondo': ['Ondo']
 * ```
 */
export function searchStates(query: string): State[] {
  if (!query) return [];
  
  const lowerQuery = query.toLowerCase();
  return STATES.filter(state => 
    state.name.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get the region a state belongs to
 * 
 * @param stateCode - State code
 * @returns Region name or null if state not found
 * 
 * @example
 * ```ts
 * const region = getStateRegion('LA');
 * console.log(region); // 'South-West'
 * ```
 */
export function getStateRegion(stateCode: string): Region | null {
  const state = getStateByCode(stateCode);
  return state?.region ?? null;
}
