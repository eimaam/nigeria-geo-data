/**
 * Core library types for Nigeria geo data
 */

/**
 * Nigerian geopolitical regions
 */
export type Region =
  | 'North-Central'
  | 'North-East'
  | 'North-West'
  | 'South-East'
  | 'South-South'
  | 'South-West';

/**
 * Nigerian state information
 */
export interface State {
  /** Full name of the state */
  name: string;
  /** State capital city */
  capital: string;
  /** Two-letter state code (e.g., 'LA' for Lagos) */
  code: string;
  /** Geopolitical region */
  region: Region;
}

/**
 * Local Government Area information
 */
export interface LGA {
  /** Name of the LGA */
  name: string;
  /** State code this LGA belongs to */
  state: string;
}

/**
 * State with its LGAs included
 */
export interface StateWithLGAs extends State {
  /** Array of LGAs in this state */
  lgas: LGA[];
  /** Total count of LGAs */
  lgaCount: number;
}

/**
 * Region statistics
 */
export interface RegionStats {
  /** Region name */
  region: Region;
  /** Number of states in the region */
  stateCount: number;
  /** Total number of LGAs in the region */
  lgaCount: number;
  /** List of states in the region */
  states: State[];
}

/**
 * All available regions in Nigeria
 */
export const REGIONS: readonly Region[] = [
  'North-Central',
  'North-East',
  'North-West',
  'South-East',
  'South-South',
  'South-West',
] as const;

