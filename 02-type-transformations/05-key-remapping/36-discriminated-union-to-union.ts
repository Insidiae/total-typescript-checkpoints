type Fruit =
	| {
			name: "apple";
			color: "red";
	  }
	| {
			name: "banana";
			color: "yellow";
	  }
	| {
			name: "orange";
			color: "orange";
	  };

type TransformedFruit = {
	[F in Fruit as F["name"]]: `${F["name"]}:${F["color"]}`;
}[Fruit["name"]];
