import * as math from 'mathjs';

export type AngleMode = 'DEG' | 'RAD' | 'GRAD';

let angleMode: AngleMode = 'DEG';

export function setAngleMode(mode: AngleMode) {
  angleMode = mode;
}

export function getAngleMode(): AngleMode {
  return angleMode;
}

function toRad(val: number): number {
  if (angleMode === 'DEG') return (val * Math.PI) / 180;
  if (angleMode === 'GRAD') return (val * Math.PI) / 200;
  return val;
}

function fromRad(val: number): number {
  if (angleMode === 'DEG') return (val * 180) / Math.PI;
  if (angleMode === 'GRAD') return (val * 200) / Math.PI;
  return val;
}

export function preprocessExpression(expr: string): string {
  let e = expr;

  // Replace display symbols with math.js equivalents
  e = e.replace(/×/g, '*');
  e = e.replace(/÷/g, '/');
  e = e.replace(/π/g, `(${Math.PI})`);
  e = e.replace(/e(?![0-9])/g, `(${Math.E})`);
  e = e.replace(/\^/g, '^');
  e = e.replace(/√\(/g, 'sqrt(');
  e = e.replace(/∛\(/g, 'cbrt(');

  // Trig with angle mode conversion
  e = e.replace(/sin\(([^)]+)\)/g, (_, inner) => `(${Math.sin(toRad(evaluate(inner)))})`);
  e = e.replace(/cos\(([^)]+)\)/g, (_, inner) => `(${Math.cos(toRad(evaluate(inner)))})`);
  e = e.replace(/tan\(([^)]+)\)/g, (_, inner) => `(${Math.tan(toRad(evaluate(inner)))})`);
  e = e.replace(/sin⁻¹\(([^)]+)\)/g, (_, inner) => `(${fromRad(Math.asin(evaluate(inner)))})`);
  e = e.replace(/cos⁻¹\(([^)]+)\)/g, (_, inner) => `(${fromRad(Math.acos(evaluate(inner)))})`);
  e = e.replace(/tan⁻¹\(([^)]+)\)/g, (_, inner) => `(${fromRad(Math.atan(evaluate(inner)))})`);

  // Log functions
  e = e.replace(/log\(([^)]+)\)/g, (_, inner) => `(log10(${inner}))`);
  e = e.replace(/ln\(([^)]+)\)/g, (_, inner) => `(log(${inner}))`);

  // Factorial
  e = e.replace(/(\d+)!/g, (_, n) => `(${factorial(parseInt(n))})`);

  // Percent
  e = e.replace(/(\d+(?:\.\d+)?)%/g, (_, n) => `(${parseFloat(n) / 100})`);

  // Implicit multiplication: 2( → 2*(
  e = e.replace(/(\d)\(/g, '$1*(');
  e = e.replace(/\)(\d)/g, ')*$1');
  e = e.replace(/\)\(/g, ')*(');

  return e;
}

function evaluate(expr: string): number {
  try {
    return parseFloat(String(math.evaluate(expr)));
  } catch {
    return 0;
  }
}

function factorial(n: number): number {
  if (n < 0) throw new Error('Negative factorial');
  if (n === 0 || n === 1) return 1;
  if (n > 170) return Infinity;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

export function nPr(n: number, r: number): number {
  if (r > n) return 0;
  return factorial(n) / factorial(n - r);
}

export function nCr(n: number, r: number): number {
  if (r > n) return 0;
  return factorial(n) / (factorial(r) * factorial(n - r));
}

export function formatResult(value: number): string {
  if (!isFinite(value)) return isNaN(value) ? 'Math ERROR' : value > 0 ? '+∞' : '-∞';
  if (Number.isInteger(value) && Math.abs(value) < 1e15) return value.toString();
  if (Math.abs(value) < 1e-9 && value !== 0) return value.toExponential(6);
  if (Math.abs(value) >= 1e10) return value.toExponential(6);
  // Remove trailing zeros
  const str = value.toPrecision(10);
  return parseFloat(str).toString();
}

export function toFraction(decimal: number): string {
  if (Number.isInteger(decimal)) return decimal.toString();
  const tolerance = 1e-9;
  let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
  let b = decimal;
  do {
    const a = Math.floor(b);
    let aux = h1;
    h1 = a * h1 + h2;
    h2 = aux;
    aux = k1;
    k1 = a * k1 + k2;
    k2 = aux;
    b = 1 / (b - a);
  } while (Math.abs(decimal - h1 / k1) > decimal * tolerance && k1 < 1000);
  if (k1 === 1) return h1.toString();
  return `${h1}⌐${k1}`;
}

export function calculate(expression: string): string {
  try {
    if (!expression.trim()) return '';
    const processed = preprocessExpression(expression);
    const result = math.evaluate(processed);
    if (typeof result === 'number') {
      return formatResult(result);
    }
    return String(result);
  } catch (e: any) {
    return 'Math ERROR';
  }
}