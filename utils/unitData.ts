export interface Unit {
  name: string;
  symbol: string;
  toBase: number; // multiplier to convert to base unit
}

export interface UnitCategory {
  name: string;
  units: Unit[];
}

export const unitCategories: UnitCategory[] = [
  {
    name: 'Length',
    units: [
      { name: 'Meter', symbol: 'm', toBase: 1 },
      { name: 'Kilometer', symbol: 'km', toBase: 1000 },
      { name: 'Centimeter', symbol: 'cm', toBase: 0.01 },
      { name: 'Millimeter', symbol: 'mm', toBase: 0.001 },
      { name: 'Mile', symbol: 'mi', toBase: 1609.344 },
      { name: 'Yard', symbol: 'yd', toBase: 0.9144 },
      { name: 'Foot', symbol: 'ft', toBase: 0.3048 },
      { name: 'Inch', symbol: 'in', toBase: 0.0254 },
      { name: 'Nautical Mile', symbol: 'nmi', toBase: 1852 },
    ],
  },
  {
    name: 'Mass',
    units: [
      { name: 'Kilogram', symbol: 'kg', toBase: 1 },
      { name: 'Gram', symbol: 'g', toBase: 0.001 },
      { name: 'Milligram', symbol: 'mg', toBase: 0.000001 },
      { name: 'Pound', symbol: 'lb', toBase: 0.453592 },
      { name: 'Ounce', symbol: 'oz', toBase: 0.0283495 },
      { name: 'Tonne', symbol: 't', toBase: 1000 },
      { name: 'Stone', symbol: 'st', toBase: 6.35029 },
    ],
  },
  {
    name: 'Temperature',
    units: [
      { name: 'Celsius', symbol: '°C', toBase: 1 },
      { name: 'Fahrenheit', symbol: '°F', toBase: 1 },
      { name: 'Kelvin', symbol: 'K', toBase: 1 },
    ],
  },
  {
    name: 'Area',
    units: [
      { name: 'Square Meter', symbol: 'm²', toBase: 1 },
      { name: 'Square Kilometer', symbol: 'km²', toBase: 1e6 },
      { name: 'Square Foot', symbol: 'ft²', toBase: 0.092903 },
      { name: 'Square Inch', symbol: 'in²', toBase: 0.00064516 },
      { name: 'Acre', symbol: 'ac', toBase: 4046.86 },
      { name: 'Hectare', symbol: 'ha', toBase: 10000 },
      { name: 'Square Mile', symbol: 'mi²', toBase: 2.59e6 },
    ],
  },
  {
    name: 'Volume',
    units: [
      { name: 'Liter', symbol: 'L', toBase: 1 },
      { name: 'Milliliter', symbol: 'mL', toBase: 0.001 },
      { name: 'Cubic Meter', symbol: 'm³', toBase: 1000 },
      { name: 'Gallon (US)', symbol: 'gal', toBase: 3.78541 },
      { name: 'Quart', symbol: 'qt', toBase: 0.946353 },
      { name: 'Pint', symbol: 'pt', toBase: 0.473176 },
      { name: 'Cup', symbol: 'cup', toBase: 0.236588 },
      { name: 'Fluid Ounce', symbol: 'fl oz', toBase: 0.0295735 },
      { name: 'Cubic Inch', symbol: 'in³', toBase: 0.0163871 },
    ],
  },
  {
    name: 'Speed',
    units: [
      { name: 'Meter/Second', symbol: 'm/s', toBase: 1 },
      { name: 'Kilometer/Hour', symbol: 'km/h', toBase: 0.277778 },
      { name: 'Mile/Hour', symbol: 'mph', toBase: 0.44704 },
      { name: 'Knot', symbol: 'kn', toBase: 0.514444 },
      { name: 'Foot/Second', symbol: 'ft/s', toBase: 0.3048 },
    ],
  },
  {
    name: 'Time',
    units: [
      { name: 'Second', symbol: 's', toBase: 1 },
      { name: 'Minute', symbol: 'min', toBase: 60 },
      { name: 'Hour', symbol: 'hr', toBase: 3600 },
      { name: 'Day', symbol: 'day', toBase: 86400 },
      { name: 'Week', symbol: 'wk', toBase: 604800 },
      { name: 'Month', symbol: 'mo', toBase: 2629800 },
      { name: 'Year', symbol: 'yr', toBase: 31557600 },
      { name: 'Millisecond', symbol: 'ms', toBase: 0.001 },
    ],
  },
  {
    name: 'Energy',
    units: [
      { name: 'Joule', symbol: 'J', toBase: 1 },
      { name: 'Kilojoule', symbol: 'kJ', toBase: 1000 },
      { name: 'Calorie', symbol: 'cal', toBase: 4.184 },
      { name: 'Kilocalorie', symbol: 'kcal', toBase: 4184 },
      { name: 'Watt-Hour', symbol: 'Wh', toBase: 3600 },
      { name: 'Kilowatt-Hour', symbol: 'kWh', toBase: 3.6e6 },
      { name: 'BTU', symbol: 'BTU', toBase: 1055.06 },
      { name: 'Electronvolt', symbol: 'eV', toBase: 1.60218e-19 },
    ],
  },
  {
    name: 'Power',
    units: [
      { name: 'Watt', symbol: 'W', toBase: 1 },
      { name: 'Kilowatt', symbol: 'kW', toBase: 1000 },
      { name: 'Megawatt', symbol: 'MW', toBase: 1e6 },
      { name: 'Horsepower', symbol: 'hp', toBase: 745.7 },
      { name: 'BTU/Hour', symbol: 'BTU/h', toBase: 0.293071 },
    ],
  },
  {
    name: 'Pressure',
    units: [
      { name: 'Pascal', symbol: 'Pa', toBase: 1 },
      { name: 'Kilopascal', symbol: 'kPa', toBase: 1000 },
      { name: 'Bar', symbol: 'bar', toBase: 100000 },
      { name: 'PSI', symbol: 'psi', toBase: 6894.76 },
      { name: 'Atmosphere', symbol: 'atm', toBase: 101325 },
      { name: 'mmHg', symbol: 'mmHg', toBase: 133.322 },
    ],
  },
  {
    name: 'Data',
    units: [
      { name: 'Byte', symbol: 'B', toBase: 1 },
      { name: 'Kilobyte', symbol: 'KB', toBase: 1024 },
      { name: 'Megabyte', symbol: 'MB', toBase: 1048576 },
      { name: 'Gigabyte', symbol: 'GB', toBase: 1073741824 },
      { name: 'Terabyte', symbol: 'TB', toBase: 1099511627776 },
      { name: 'Bit', symbol: 'bit', toBase: 0.125 },
    ],
  },
];

export function convertUnit(value: number, from: string, to: string, category: string): number {
  if (category === 'Temperature') {
    return convertTemperature(value, from, to);
  }

  const cat = unitCategories.find(c => c.name === category);
  if (!cat) return NaN;

  const fromUnit = cat.units.find(u => u.symbol === from);
  const toUnit = cat.units.find(u => u.symbol === to);
  if (!fromUnit || !toUnit) return NaN;

  const baseValue = value * fromUnit.toBase;
  return baseValue / toUnit.toBase;
}

function convertTemperature(value: number, from: string, to: string): number {
  if (from === to) return value;

  // Convert to Celsius first
  let celsius: number;
  if (from === '°C') celsius = value;
  else if (from === '°F') celsius = (value - 32) * 5 / 9;
  else celsius = value - 273.15; // Kelvin

  // Convert from Celsius to target
  if (to === '°C') return celsius;
  if (to === '°F') return celsius * 9 / 5 + 32;
  return celsius + 273.15; // Kelvin
}