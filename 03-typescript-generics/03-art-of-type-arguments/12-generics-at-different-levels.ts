// export const getHomePageFeatureFlags = <
// 	Config extends {
// 		rawConfig: {
// 			featureFlags: {
// 				homePage: any;
// 			};
// 		};
// 	}
// >(
// 	config: Config,
// 	override: (
// 		flags: Config["rawConfig"]["featureFlags"]["homePage"]
// 	) => Config["rawConfig"]["featureFlags"]["homePage"]
// ) => {
// 	return override(config.rawConfig.featureFlags.homePage);
// };

// Or:

export function getHomePageFeatureFlags<HomePageFlags>(
	config: { rawConfig: { featureFlags: { homePage: HomePageFlags } } },
	override: (flags: HomePageFlags) => HomePageFlags
) {
	return override(config.rawConfig.featureFlags.homePage);
}

const EXAMPLE_CONFIG = {
	apiEndpoint: "https://api.example.com",
	apiVersion: "v1",
	apiKey: "1234567890",
	rawConfig: {
		featureFlags: {
			homePage: {
				showBanner: true,
				showLogOut: false,
			},
			loginPage: {
				showCaptcha: true,
				showConfirmPassword: false,
			},
		},
	},
};

const flagsWithoutOverride = getHomePageFeatureFlags(
	EXAMPLE_CONFIG,
	(defaultFlags) => defaultFlags
);

const flagsWithOverride = getHomePageFeatureFlags(
	EXAMPLE_CONFIG,
	(defaultFlags) => ({
		...defaultFlags,
		showBanner: false,
	})
);
