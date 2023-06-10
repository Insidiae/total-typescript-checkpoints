type MakeInfiniteScrollParams<TRow> = {
	key: keyof TRow;
	fetchRows: () => Promise<TRow[]> | TRow[];
	initialRows?: TRow[];
};

function makeInfiniteScroll<TRow>(params: MakeInfiniteScrollParams<TRow>) {
	const data = params.initialRows || [];

	const scroll = async () => {
		const rows = await params.fetchRows();
		data.push(...rows);
	};

	return {
		scroll,
		getRows: () => data,
	};
}
