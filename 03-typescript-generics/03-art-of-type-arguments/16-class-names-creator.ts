// function createClassNamesFactory<Variant extends string>(classes: Record<Variant, string>) {
//   return (type: Variant, ...otherClasses: string[]) => {
//     const classList = [classes[type], ...otherClasses];
//     return classList.join(" ");
//   };
// }

// Or:

function createClassNamesFactory<VariantsMap extends Record<string, string>>(
	classes: VariantsMap
) {
	return (type: keyof VariantsMap, ...otherClasses: string[]) => {
		const classList = [classes[type], ...otherClasses];
		return classList.join(" ");
	};
}

const getBg = createClassNamesFactory({
	primary: "bg-blue-500",
	secondary: "bg-gray-500",
});
