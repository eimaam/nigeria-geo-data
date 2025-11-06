export const NIGERIAN_REGIONS = [
  'North-Central',
  'North-East',
  'North-West',
  'South-East',
  'South-South',
  'South-West',
] as const;

export type NigerianRegion = typeof NIGERIAN_REGIONS[number];

export const REGION_DESCRIPTIONS: Record<NigerianRegion, string> = {
  'North-Central': 'Middle Belt region including FCT Abuja',
  'North-East': 'Northeastern states bordering Chad and Cameroon',
  'North-West': 'Northwestern states with largest land area',
  'South-East': 'Predominantly Igbo-speaking southeastern states',
  'South-South': 'Oil-rich Niger Delta region',
  'South-West': 'Predominantly Yoruba-speaking southwestern states',
};

export const STATES_BY_REGION: Record<NigerianRegion, string[]> = {
  'North-Central': ['Benue', 'FCT', 'Kogi', 'Kwara', 'Nasarawa', 'Niger', 'Plateau'],
  'North-East': ['Adamawa', 'Bauchi', 'Borno', 'Gombe', 'Taraba', 'Yobe'],
  'North-West': ['Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Sokoto', 'Zamfara'],
  'South-East': ['Abia', 'Anambra', 'Ebonyi', 'Enugu', 'Imo'],
  'South-South': ['Akwa Ibom', 'Bayelsa', 'Cross River', 'Delta', 'Edo', 'Rivers'],
  'South-West': ['Ekiti', 'Lagos', 'Ogun', 'Ondo', 'Osun', 'Oyo'],
};

