type Route = "/" | "/about" | "/admin" | "/admin/users";

type RoutesObject = {
	[PathName in Route]: PathName;
};
