define({
	Product : { name: "Product", integral: 1, mass: 0, nrH: 1, relativeH: 0 },
	List: [
		{ name: "impurity", mass: 0, nrH: 1, integral: 0 },
		{
			name: "MeOH", mass: 32.04, nrH: 3,
			HData: [
				{ multiplet: "CH<sub>3</sub> s", values: [3.49, 3.31, 3.16, 3.07, 3.28, 3.34, 3.34], comments: ["h"] },
				{ multiplet: "OH s", values: [1.09, 3.12, 4.01, "-", 2.16, "-", "-"], comments: ["c", "h"] }
			]
		},
		{
			name: "EtOH", mass: 46.07, nrH: 3,
			HData: [
				{ multiplet: "CH<sub>3</sub> t, 7 Hz", values: [1.25, 1.12, 1.06, 0.96, 1.12, 1.19, 1.17] },
				{ multiplet: "CH<sub>2</sub> q, 7 Hz", values: [3.72, 3.57, 3.44, 3.34, 3.54, 3.60, 3.65], comments: ["d"] },
				{ multiplet: "OH s", values: [1.32, 3.39, 4.63, "-", 2.47, "-", "-"], comments: ["c", "d"] }
			]
		},
		{
			name: "iPrOH", mass: 60.10, nrH: 6,
			HData: [
				{ multiplet: "CH<sub>3</sub> d, 6 Hz", values: [1.22, 1.10, 1.04, 0.95, 1.09, 1.50, 1.17] },
				{ multiplet: "CH sep, 6 Hz", values: [4.04, 3.90, 3.78, 3.67, 3.87, 3.92, 4.02] }
			]
		},
		{
			name: "tBuOH", mass: 74.12, nrH: 9,
			HData: [
				{ multiplet: "CH<sub>3</sub> s", values: [1.28, 1.18, 1.11, 1.05, 1.16, 1.40, 1.24] },
				{ multiplet: "OH", values: ["-", "-", 4.19, 1.55, 2.18, "-", "-"], comments: ["c"] }
			]
		},
		{
			name: "MeCN", mass: 41.05, nrH: 3,
			HData: [
				{ multiplet: "CH<sub>3</sub> s", values: [2.01, 2.05, 2.07, 1.55, 1.96, 2.03, 2.06] }
			]
		},
		{
			name: "DCM", mass: 84.93, nrH: 2,
			HData: [
				{ multiplet: "CH<sub>2</sub> s", values: [5.30, 5.63, 5.76, 4.27, 5.44, 5.49, "-"] }
			]
		},
		{
			name: "EtOAc", mass: 88.11, nrH: 3,
			HData: [
				{ multiplet: "CH<sub>3</sub>CO s", values: [2.05, 1.97, 1.99, 1.65, 1.97, 2.01, 2.07] },
				{ multiplet: "C<i>H</i><sub>2</sub>CH<sub>3</sub> q, 7", values: [4.12, 4.05, 4.03, 3.89, 4.06, 4.09, 4.14] },
				{ multiplet: "CH<sub>2</sub>C<i>H</i><sub>3</sub> t, 7", values: [1.26, 1.20, 1.17, 0.92, 1.20, 1.24, 1.24] }
			]
		},
		{
			name: "TBME", mass: 88.15, nrH: 3,
			HData: [
				{ multiplet: "CH<sub>3</sub>CO s", values: [2.14, 2.07, 2.07, 1.58, 2.06, 2.12, 2.19] },
				{ multiplet: "C<i>H</i><sub>2</sub>CH<sub>3</sub> q, 7", values: [2.46, 2.45, 2.43, 1.81, 2.43, 2.50, 3.18] },
				{ multiplet: "CH<sub>2</sub>C<i>H</i><sub>3</sub> t, 7", values: [1.06, 0.96, 0.91, 0.85, 0.96, 1.01, 1.26] }
			]
		},
		{
			name: "Acetone", mass: 58.08, nrH: 6,
			HData: [
				{ multiplet: "CH<sub>3</sub> s", values: [2.17, 2.09, 2.09, 1.55, 2.08, 2.15, 2.22] }
			]
		},
		{
			name: "Et2O", mass: 74.12, nrH: 4,
			HData: [
				{ multiplet: "CH<sub>3</sub> t, 7", values: [1.21, 1.11, 1.09, 1.11, 1.12, 1.18, 1.17] },
				{ multiplet: "CH<sub>2</sub> q, 7", values: [3.48, 3.41, 3.38, 3.26, 3.42, 3.49, 3.56] }
			]
		},
		{ name: "DIP", mass: 102.18, nrH: 12 },
		{
			name: "THF", mass: 72.11, nrH: 4,
			HData: [
				{ multiplet: "CH<sub>2</sub> m", values: [1.85, 1.79, 1.76, 1.40, 1.80, 1.87, 1.88] },
				{ multiplet: "CH<sub>2</sub>O m", values: [3.76, 3.63, 3.60, 3.57, 3.64, 3.71, 3.74] }
			]
		},
		{
			name: "dioxane", mass: 88.11, nrH: 8,
			HData: [
				{ multiplet: "CH<sub>2</sub> s", values: [3.71, 3.59, 3.57, 3.35, 3.60, 3.66, 3.75] }
			]
		},
		{ name: "formic_acid", mass: 46.03, nrH: 1 },
		{
			name: "AcOH", mass: 60.05, nrH: 3,
			HData: [
				{ multiplet: "CH<sub>3</sub> s", values: [2.10, 1.96, 1.91, 1.55, 1.96, 1.99, 2.08] }
			]
		},
		{
			name: "DMF", mass: 73.10, nrH: 3,
			HData: [
				{ multiplet: "CH s", values: [8.02, 7.96, 7.95, 7.63, 7.92, 7.97, 7.92] },
				{ multiplet: "CH<sub>3</sub> s", values: [2.96, 2.94, 2.89, 2.36, 2.89, 2.99, 3.01] },
				{ multiplet: "CH<sub>3</sub> s", values: [2.88, 2.78, 2.73, 1.86, 2.77, 2.86, 2.85] }
			]
		},
		{
			name: "DMAc", mass: 87.12, nrH: 3,
			HData: [
				{ multiplet: "CH<sub>3</sub>CO s", values: [2.09, 1.97, 1.96, 1.60, 1.97, 2.07, 2.08] },
				{ multiplet: "NCH<sub>3</sub> s", values: [3.02, 3.00, 2.94, 2.57, 2.96, 3.31, 3.06] },
				{ multiplet: "NCH<sub>3</sub> s", values: [2.94, 2.83, 2.78, 2.05, 2.83, 2.92, 2.90] }
			]
		},
		{ name: "NH4Cl", mass: 53.49, nrH: 4 },
		{
			name: "heptane", mass: 100.21, nrH: 6,
			HData: [
				{ multiplet: "CH<sub>3</sub> t", values: [0.88, 0.88, 0.86, 0.89, 0.89, 0.90, "-"], comments: ["j"] },
				{ multiplet: "CH<sub>2</sub> m", values: [1.26, 1.28, 1.25, 1.24, 1.28, 1.29, "-"], comments: ["j"] }
			]
		},
		{
			name: "pentane", mass: 72.15, nrH: 6,
			HData: [
				{ multiplet: "CH<sub>3</sub> t", values: [0.88, 0.88, 0.86, 0.87, 0.89, 0.90, "-"] },
				{ multiplet: "CH<sub>2</sub> m", values: [1.27, 1.27, 1.27, 1.23, 1.29, 1.29, "-"] }
			]
		},
		{
			name: "toluene", mass: 92.14, nrH: 3,
			HData: [
				{ multiplet: "CH<sub>3</sub> s", values: [2.36, 2.32, 2.30, 2.11, 2.33, 2.32, "-"] },
				{ multiplet: "CH(o/p) m", values: [7.17, 7.15, 7.18, 7.02, 7.2, 7.16] },
				{ multiplet: "CH(m) m", values: [7.25, 7.15, 7.25, 7.13, 7.2, 7.16] }
			]
		},
		{
			name: "Et3N", mass: 101.19, nrH: 6,
			HData: [
				{ multiplet: "CH<sub>3</sub> t,7", values: [1.03, 0.96, 0.93, 0.96, 0.96, 1.05, 0.99] },
				{ multiplet: "CH<sub>2</sub> q, 7", values: [2.53, 2.45, 2.43, 2.40, 2.45, 2.58, 2.57] }
			]
		},
		{ name: "DIPEA", mass: 129.25, nrH: 2 },
		{
			name: "pyridine", mass: 79.10, nrH: 1,
			HData: [
				{ multiplet: "CH(2) m", values: [8.62, 8.58, 8.58, 8.53, 8.57, 8.53, 8.52] },
				{ multiplet: "CH(3) m", values: [7.29, 7.35, 7.39, 6.66, 7.33, 7.44, 7.45] },
				{ multiplet: "CH(4) m", values: [7.68, 7.76, 7.79, 6.98, 7.73, 7.85, 7.87] }
			]
		},
		{
			name: "BHT", mass: 220.36, nrH: 3,
			HData: [
				{ multiplet: "ArH s", values: [6.98, 6.96, 6.87, 7.05, 6.97, 6.92, "-"] },
				{ multiplet: "OH s", values: [5.01, "-", 6.65, 4.79, 5.20, "-", "-"], comments: ["c"] },
				{ multiplet: "ArCH<sub>3</sub> s", values: [2.27, 2.22, 2.18, 2.24, 2.22, 2.21, "-"] },
				{ multiplet: "ArC(CH<sub>3</sub>)<sub>3</sub> s", values: [1.43, 1.41, 1.36, 1.38, 1.39, 1.40] }
			]
		},
		{ name: "NMP", mass: 99.13, nrH: 3 }
	]
});
/* template:

,
HData: [
			{  multiplet: "", values: [] },
]

*/