const zalupa = [
   -3.93,  -3.43,  -3.37,  -3.31,  -2.87,  -2.60,  -2.45,  -2.30,  -2.28,
	-2.18,  -2.05,  -1.94,  -1.91,  -1.90,  -1.85,  -1.74,  -1.66,  -1.64,
	-1.58,  -1.54,  -1.51,  -1.48,  -1.46,  -1.45,  -1.42,  -1.36,  -1.34,
	-1.29,  -1.25,  -1.19,  -1.18,  -1.06,  -1.01,  -1.00,  -0.97,  -0.95,
	-0.92,  -0.84,  -0.76,  -0.75,  -0.70,  -0.64,  -0.60,  -0.58,  -0.55,
	-0.53,  -0.53,  -0.52,  -0.50,  -0.46,  -0.42,  -0.35,  -0.23,  -0.18,
	-0.15,  -0.14,  -0.10,  -0.07,  -0.06,  -0.02,  -0.00,   0.00,    0.06,
	 0.11,   0.17,    0.27,   0.33,    0.43,   0.56,   0.62,    0.83,    0.91,
	 0.92,   0.98,    1.03,   1.43,    1.67,   1.88,   1.89,    1.97,    2.07   
]

let sumx = 0;
let mx = 0;
let pr = 0;
let sum = 0;

for (let i = 0; i < zalupa.length; i++) {
  sumx = sumx + zalupa[i];
}

mx = sumx/81;

console.log(mx); // математич ожидание

for (let i = 0; i < zalupa.length; i++) {
  pr = (mx - zalupa[i])*(mx - zalupa[i]);
  sum = sum + pr;
  pr = 0;
}

//console.log(sum);

let rez = sum / 80;

console.log(rez); // выборочная дисперсия
console.log(Math.sqrt(rez)); // среднеквадратич отклонение