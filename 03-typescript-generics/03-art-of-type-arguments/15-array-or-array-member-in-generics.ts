const makeStatus = <TStatuses extends string>(statuses: TStatuses[]) => {
	return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);
