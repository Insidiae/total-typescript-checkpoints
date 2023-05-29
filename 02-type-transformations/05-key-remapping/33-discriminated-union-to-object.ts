type Route =
	| {
			route: "/";
			search: {
				page: string;
				perPage: string;
			};
	  }
	| { route: "/about"; search: {} }
	| { route: "/admin"; search: {} }
	| { route: "/admin/users"; search: {} };

// type RoutesObject = {
// 	[R in Route["route"]]: Extract<Route, { route: R }>["search"];
// };

// Or:

type RoutesObject = {
	[R in Route as R["route"]]: R["search"];
};
