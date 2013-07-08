var solventsList = [
    { name: "impurity", mass: 0, nrH: 1, integral: 0 },
    {
    	name: "MeOH", mass: 32.04, nrH: 3,
    	HData: [
				{ multiplet: "CH3 s", values: [3.49, 3.31, 3.16, 3.07, 3.28, 3.34, 3.34], comments: ["h"] },
    			{ multiplet: "OH sc", values: [1.09, 3.12, 4.01, "-", 2.16, "-", "-"], comments: ["c", "h"] }
    	]
    },
    {
    	name: "EtOH", mass: 46.07, nrH: 3,
    	HData: [
			{ multiplet: "CH3 t, 7 Hz", values: [1.25, 1.12, 1.06, 0.96, 1.12, 1.19, 1.17] },
			{ multiplet: "CH2 q, 7 Hz", values: [3.72, 3.57, 3.44, 3.34, 3.54, 3.60, 3.65], comments: ["d"] },
			{ multiplet: "OH s", values: [1.32, 3.39, 4.63, "-", 2.47, "-", "-"], comments: ["c", "d"] }
    	]

    },
    {
    	name: "iPrOH", mass: 60.10, nrH: 6,
    	HData: [
					{ multiplet: "CH3 d, 6 Hz", values: [1.22, 1.10, 1.04, 0.95, 1.09, 1.50, 1.17] },
					{ multiplet: "CH sep, 6 Hz", values: [4.04, 3.90, 3.78, 3.67, 3.87, 3.92, 4.02] }
    	]
    },
    { name: "tBuOH", mass: 74.12, nrH: 9 },
    { name: "MeCN", mass: 41.05, nrH: 3 },
    { name: "DCM", mass: 84.93, nrH: 2 },
    { name: "EtOAc", mass: 88.11, nrH: 3 },
    { name: "TBME", mass: 88.15, nrH: 3 },
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