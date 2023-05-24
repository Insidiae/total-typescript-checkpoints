const coerceAmount = (amount: number | { amount: number }) => {
	if (typeof amount === "object") {
		return amount.amount;
	}

	return amount;
};
