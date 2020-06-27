exports.seed = function (knex) {
	return knex("project").insert([
		{
			name: "Project One",
			description: "World Domination.",
		},
		{ name: "Project Two", description: "Get Rich Quick." },
		{
			name: "Project Three",
			description: "Find Japanese investors.",
			completed: true,
		},
		{ name: "Project Four", description: "More Instagram Followers" },
		{
			name: "Project Five",
			description: "Collect all the sheep in Scotland.",
			completed: true,
		},
	]);
};
