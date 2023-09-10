export const getMoney = (amount: number) => {
	return new Intl.NumberFormat("pl-PL", { style: "currency", currency: "USD" }).format(amount / 100);
};
