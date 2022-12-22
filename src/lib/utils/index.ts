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

export const getDeliveryFrequencyDisplay = (plan: any) => {
	let interval = ''

	switch (plan.billing_schedule.interval) {
		case 'daily':
			interval =
				plan.billing_schedule.interval_count === 1
					? 'day'
					: `${plan.billing_schedule.interval_count} days`
			break

		case 'weekly':
			interval =
				plan.billing_schedule.interval_count === 1
					? 'week'
					: `${plan.billing_schedule.interval_count} weeks`
			break

		case 'monthly':
			interval =
				plan.billing_schedule.interval_count === 1
					? 'month'
					: `${plan.billing_schedule.interval_count} months`
			break

		case 'yearly':
			interval =
				plan.billing_schedule.interval_count === 1
					? 'year'
					: `${plan.billing_schedule.interval_count} years`
			break

		default:
			interval = '?'
	}

	return `Every ${interval}`
}
