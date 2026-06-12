export interface Formula {
  name: string;
  formula: string;
  variables: string;
  category: string;
}

export const formulaCategories = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Engineering',
  'Statistics',
  'Geometry',
  'Trigonometry',
  'Finance',
];

export const formulas: Formula[] = [
  // ─── Mathematics ───
  { category: 'Mathematics', name: 'Quadratic Formula', formula: 'x = (-b ± √(b²-4ac)) / 2a', variables: 'a, b, c = coefficients' },
  { category: 'Mathematics', name: 'Binomial Theorem', formula: '(a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ', variables: 'a,b = terms, n = power' },
  { category: 'Mathematics', name: 'Sum of AP', formula: 'S = n/2 × (2a + (n-1)d)', variables: 'a = first term, d = common diff, n = terms' },
  { category: 'Mathematics', name: 'nth term of AP', formula: 'aₙ = a + (n-1)d', variables: 'a = first term, d = common diff' },
  { category: 'Mathematics', name: 'Sum of GP', formula: 'S = a(rⁿ - 1) / (r - 1)', variables: 'a = first term, r = ratio, n = terms' },
  { category: 'Mathematics', name: 'nth term of GP', formula: 'aₙ = a × rⁿ⁻¹', variables: 'a = first term, r = ratio' },
  { category: 'Mathematics', name: 'Logarithm Change of Base', formula: 'logₐb = log b / log a', variables: 'a = base, b = argument' },
  { category: 'Mathematics', name: 'Permutation', formula: 'P(n,r) = n! / (n-r)!', variables: 'n = total, r = selected' },
  { category: 'Mathematics', name: 'Combination', formula: 'C(n,r) = n! / (r!(n-r)!)', variables: 'n = total, r = selected' },
  { category: 'Mathematics', name: "Euler's Formula", formula: 'eⁱˣ = cos x + i sin x', variables: 'x = angle in radians' },
  { category: 'Mathematics', name: 'AM-GM Inequality', formula: 'AM ≥ GM: (a+b)/2 ≥ √(ab)', variables: 'a, b = positive numbers' },

  // ─── Geometry ───
  { category: 'Geometry', name: 'Area of Circle', formula: 'A = πr²', variables: 'r = radius' },
  { category: 'Geometry', name: 'Circumference', formula: 'C = 2πr', variables: 'r = radius' },
  { category: 'Geometry', name: 'Area of Triangle', formula: 'A = ½ × b × h', variables: 'b = base, h = height' },
  { category: 'Geometry', name: "Heron's Formula", formula: 'A = √(s(s-a)(s-b)(s-c))', variables: 's = (a+b+c)/2' },
  { category: 'Geometry', name: 'Area of Rectangle', formula: 'A = l × w', variables: 'l = length, w = width' },
  { category: 'Geometry', name: 'Area of Trapezoid', formula: 'A = ½(a+b) × h', variables: 'a,b = parallel sides, h = height' },
  { category: 'Geometry', name: 'Volume of Sphere', formula: 'V = (4/3)πr³', variables: 'r = radius' },
  { category: 'Geometry', name: 'Surface Area of Sphere', formula: 'SA = 4πr²', variables: 'r = radius' },
  { category: 'Geometry', name: 'Volume of Cylinder', formula: 'V = πr²h', variables: 'r = radius, h = height' },
  { category: 'Geometry', name: 'Volume of Cone', formula: 'V = (1/3)πr²h', variables: 'r = radius, h = height' },
  { category: 'Geometry', name: 'Pythagorean Theorem', formula: 'c² = a² + b²', variables: 'a,b = legs, c = hypotenuse' },
  { category: 'Geometry', name: 'Distance Formula', formula: 'd = √((x₂-x₁)² + (y₂-y₁)²)', variables: '(x₁,y₁), (x₂,y₂) = points' },
  { category: 'Geometry', name: 'Midpoint Formula', formula: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)', variables: 'Two points' },
  { category: 'Geometry', name: 'Slope Formula', formula: 'm = (y₂-y₁)/(x₂-x₁)', variables: 'Two points on line' },

  // ─── Trigonometry ───
  { category: 'Trigonometry', name: 'Sine Rule', formula: 'a/sin A = b/sin B = c/sin C', variables: 'a,b,c = sides, A,B,C = angles' },
  { category: 'Trigonometry', name: 'Cosine Rule', formula: 'c² = a² + b² - 2ab cos C', variables: 'a,b,c = sides, C = included angle' },
  { category: 'Trigonometry', name: 'sin²θ + cos²θ', formula: 'sin²θ + cos²θ = 1', variables: 'θ = angle' },
  { category: 'Trigonometry', name: 'Double Angle (sin)', formula: 'sin 2θ = 2 sin θ cos θ', variables: 'θ = angle' },
  { category: 'Trigonometry', name: 'Double Angle (cos)', formula: 'cos 2θ = cos²θ - sin²θ', variables: 'θ = angle' },
  { category: 'Trigonometry', name: 'tan Identity', formula: 'tan θ = sin θ / cos θ', variables: 'θ = angle' },
  { category: 'Trigonometry', name: '1 + tan²θ', formula: '1 + tan²θ = sec²θ', variables: 'θ = angle' },
  { category: 'Trigonometry', name: 'Sum to Product (sin)', formula: 'sin A + sin B = 2 sin((A+B)/2) cos((A-B)/2)', variables: 'A,B = angles' },

  // ─── Physics ───
  { category: 'Physics', name: "Newton's Second Law", formula: 'F = ma', variables: 'F = force(N), m = mass(kg), a = acceleration(m/s²)' },
  { category: 'Physics', name: 'Kinetic Energy', formula: 'KE = ½mv²', variables: 'm = mass(kg), v = velocity(m/s)' },
  { category: 'Physics', name: 'Potential Energy', formula: 'PE = mgh', variables: 'm = mass, g = 9.8 m/s², h = height(m)' },
  { category: 'Physics', name: 'Work Done', formula: 'W = F × d × cos θ', variables: 'F = force, d = displacement, θ = angle' },
  { category: 'Physics', name: "Ohm's Law", formula: 'V = IR', variables: 'V = voltage(V), I = current(A), R = resistance(Ω)' },
  { category: 'Physics', name: 'Power (Electric)', formula: 'P = VI = I²R = V²/R', variables: 'V = voltage, I = current, R = resistance' },
  { category: 'Physics', name: 'Gravitational Force', formula: 'F = Gm₁m₂/r²', variables: 'G = 6.674×10⁻¹¹, m₁,m₂ = masses, r = distance' },
  { category: 'Physics', name: 'Wave Speed', formula: 'v = fλ', variables: 'f = frequency(Hz), λ = wavelength(m)' },
  { category: 'Physics', name: 'Equations of Motion (v)', formula: 'v = u + at', variables: 'u = initial vel, a = acc, t = time' },
  { category: 'Physics', name: 'Equations of Motion (s)', formula: 's = ut + ½at²', variables: 'u = initial vel, a = acc, t = time' },
  { category: 'Physics', name: 'Equations of Motion (v²)', formula: 'v² = u² + 2as', variables: 'u = initial vel, a = acc, s = displacement' },
  { category: 'Physics', name: "Coulomb's Law", formula: 'F = kq₁q₂/r²', variables: 'k = 8.99×10⁹, q = charges, r = distance' },
  { category: 'Physics', name: 'Momentum', formula: 'p = mv', variables: 'm = mass(kg), v = velocity(m/s)' },
  { category: 'Physics', name: "Hooke's Law", formula: 'F = -kx', variables: 'k = spring constant, x = extension(m)' },
  { category: 'Physics', name: 'Ideal Gas Law', formula: 'PV = nRT', variables: 'P = pressure, V = volume, n = moles, R = 8.314, T = temp(K)' },

  // ─── Chemistry ───
  { category: 'Chemistry', name: "Avogadro's Number", formula: 'N = n × Nₐ', variables: 'n = moles, Nₐ = 6.022×10²³' },
  { category: 'Chemistry', name: 'Moles Calculation', formula: 'n = m / M', variables: 'm = mass(g), M = molar mass(g/mol)' },
  { category: 'Chemistry', name: 'pH Formula', formula: 'pH = -log[H⁺]', variables: '[H⁺] = hydrogen ion concentration' },
  { category: 'Chemistry', name: 'Concentration', formula: 'C = n / V', variables: 'n = moles, V = volume(L)' },
  { category: 'Chemistry', name: "Faraday's Law", formula: 'Q = nFz', variables: 'n = moles, F = 96485 C/mol, z = electrons' },
  { category: 'Chemistry', name: 'Rate of Reaction', formula: 'r = k[A]ˣ[B]ʸ', variables: 'k = rate constant, [A],[B] = concentrations' },
  { category: 'Chemistry', name: 'Enthalpy Change', formula: 'ΔH = H_products - H_reactants', variables: 'H = enthalpy' },
  { category: 'Chemistry', name: "Henderson-Hasselbalch", formula: 'pH = pKa + log([A⁻]/[HA])', variables: 'pKa = -log(Ka)' },

  // ─── Engineering ───
  { category: 'Engineering', name: "Ohm's Law Extended", formula: 'V = IR, P = I²R, P = V²/R', variables: 'V,I,R,P standard units' },
  { category: 'Engineering', name: 'Beam Bending Stress', formula: 'σ = My/I', variables: 'M = moment, y = dist from NA, I = moment of inertia' },
  { category: 'Engineering', name: 'Shear Stress', formula: 'τ = VQ / Ib', variables: 'V = shear, Q = first moment, I = moment of inertia, b = width' },
  { category: 'Engineering', name: "Euler's Column", formula: 'Pcr = π²EI / (KL)²', variables: 'E = modulus, I = moment of inertia, K = eff length factor, L = length' },
  { category: 'Engineering', name: 'Stress Formula', formula: 'σ = F / A', variables: 'F = force(N), A = cross section area(m²)' },
  { category: 'Engineering', name: 'Strain Formula', formula: 'ε = ΔL / L', variables: 'ΔL = change in length, L = original length' },
  { category: 'Engineering', name: "Young's Modulus", formula: 'E = σ / ε', variables: 'σ = stress, ε = strain' },
  { category: 'Engineering', name: 'Power (Mechanical)', formula: 'P = τω = Fv', variables: 'τ = torque, ω = angular vel, F = force, v = velocity' },
  { category: 'Engineering', name: 'Reynolds Number', formula: 'Re = ρvD / μ', variables: 'ρ = density, v = velocity, D = diameter, μ = viscosity' },

  // ─── Statistics ───
  { category: 'Statistics', name: 'Mean', formula: 'x̄ = Σx / n', variables: 'Σx = sum of values, n = count' },
  { category: 'Statistics', name: 'Variance', formula: 'σ² = Σ(x-x̄)² / n', variables: 'x̄ = mean, n = count' },
  { category: 'Statistics', name: 'Standard Deviation', formula: 'σ = √(Σ(x-x̄)² / n)', variables: 'x̄ = mean, n = count' },
  { category: 'Statistics', name: 'Normal Distribution', formula: 'f(x) = (1/σ√2π) e^(-(x-μ)²/2σ²)', variables: 'μ = mean, σ = std dev' },
  { category: 'Statistics', name: 'Correlation Coefficient', formula: 'r = Σ(x-x̄)(y-ȳ) / √(Σ(x-x̄)²Σ(y-ȳ)²)', variables: 'x,y = data sets' },
  { category: 'Statistics', name: 'Linear Regression', formula: 'y = mx + b', variables: 'm = slope, b = intercept' },
  { category: 'Statistics', name: 'Bayes Theorem', formula: 'P(A|B) = P(B|A)P(A) / P(B)', variables: 'P = probability' },
  { category: 'Statistics', name: 'Binomial Distribution', formula: 'P(X=k) = C(n,k) pᵏ (1-p)ⁿ⁻ᵏ', variables: 'n = trials, p = probability, k = successes' },

  // ─── Finance ───
  { category: 'Finance', name: 'Simple Interest', formula: 'SI = P × r × t', variables: 'P = principal, r = rate, t = time' },
  { category: 'Finance', name: 'Compound Interest', formula: 'A = P(1 + r/n)^(nt)', variables: 'P = principal, r = rate, n = times/year, t = years' },
  { category: 'Finance', name: 'Present Value', formula: 'PV = FV / (1+r)ⁿ', variables: 'FV = future value, r = rate, n = periods' },
  { category: 'Finance', name: 'Future Value', formula: 'FV = PV × (1+r)ⁿ', variables: 'PV = present value, r = rate, n = periods' },
  { category: 'Finance', name: 'EMI Formula', formula: 'EMI = P × r(1+r)ⁿ / ((1+r)ⁿ - 1)', variables: 'P = principal, r = monthly rate, n = months' },
  { category: 'Finance', name: 'Rule of 72', formula: 'Years = 72 / rate', variables: 'rate = annual interest rate (%)' },
  { category: 'Finance', name: 'NPV', formula: 'NPV = Σ Cₜ/(1+r)ᵗ - C₀', variables: 'Cₜ = cash flow, r = discount rate, C₀ = initial cost' },
];