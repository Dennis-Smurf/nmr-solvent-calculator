var solventsList = [
    { name: "impurity", mass: 0, nrH: 1, integral: 0 },
    {
    	name: "MeOH", mass: 32.04, nrH: 3,
    	HData: [
				{ multiplet: "CH<sub>3</sub> s", values: [3.49, 3.31, 3.16, 3.07, 3.28, 3.34, 3.34], comments: ["h"] },
    			{ multiplet: "OH sc", values: [1.09, 3.12, 4.01, "-", 2.16, "-", "-"], comments: ["c", "h"] }
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
					{ multiplet: "CH<sub>3</sub> s", values: [2.10, 2.05, 2.07, 1.55, 1.96, 2.03, 2.06] }
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
					{ multiplet: "CH<sub>2</sub>C<i>H</i><sub>3</sub> t, 7", values: [1.26, 1.20, 1.17, 0.92, 1.20, 1.24, 1.24] },
    	]
    },
    {
    	name: "TBME", mass: 88.15, nrH: 3,
    	HData: [
					{ multiplet: "CH<sub>3</sub>CO s", values: [2.14, 2.07, 2.07, 1.58, 2.06, 2.12, 2.19] },
					{ multiplet: "C<i>H</i><sub>2</sub>CH<sub>3</sub> q, 7", values: [2.46, 2.45, 2.43, 1.81, 2.43, 2.50, 3.18] },
					{ multiplet: "CH<sub>2</sub>C<i>H</i><sub>3</sub> t, 7", values: [1.06, 0.96, 0.91, 0.85, 0.96, 1.01, 1.26] },
    	]
    },
    { name: "Acetone", mass: 58.08, nrH: 6 },
    { name: "Et2O", mass: 74.12, nrH: 4 },
    { name: "DIP", mass: 102.18, nrH: 12 },
    { name: "THF", mass: 72.11, nrH: 4 },
    { name: "dioxane", mass: 88.11, nrH: 8 },
    { name: "formic_acid", mass: 46.03, nrH: 1 },
    { name: "AcOH", mass: 60.05, nrH: 3 },
    { name: "DMF", mass: 73.10, nrH: 6 },
    { name: "DMAc", mass: 87.12, nrH: 3 },
    { name: "NH4Cl", mass: 53.49, nrH: 4 },
    { name: "heptane", mass: 100.21, nrH: 6 },
    { name: "pentane", mass: 72.15, nrH: 6 },
    { name: "toluene", mass: 92.14, nrH: 3 },
    { name: "Et3N", mass: 101.19, nrH: 6 },
    { name: "DIPEA", mass: 129.25, nrH: 2 },
    { name: "pyridine", mass: 79.10, nrH: 1 },
    { name: "BHT", mass: 220.36, nrH: 3 },
    { name: "NMP", mass: 99.13, nrH: 3 }
];
/* template:

,
HData: [
			{  multiplet: "", values: [] },
]

*/