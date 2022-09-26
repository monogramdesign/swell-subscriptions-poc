type Price = {
	amount: number
	local?: string
	currency?: string
	decimalPlaces?: number
}

export const formatCurrency = ({
	amount,
	local = 'en-US',
	currency = 'USD',
	decimalPlaces = 2
}: Price) => {
	const formatter = new Intl.NumberFormat(local, {
		style: 'currency',
		currency,
		maximumFractionDigits: decimalPlaces
	})

	return isNaN(amount) ? '--' : formatter.format(amount)
}

export const capitalize = (text: string) => {
	const lower = text.toLowerCase()
	const first = lower.charAt(0).toUpperCase()
	return first + lower.slice(1)
}

export const getDeliveryFrequency = (plan: any) => {
	if (plan.billing_schedule.interval_count === 1) {
		return plan.billing_schedule.interval
	} else {
		return `${plan.billing_schedule.interval_count} ${
			plan.billing_schedule.interval === 'weekly' ? 'weeks' : 'months'
		}`
	}
}
