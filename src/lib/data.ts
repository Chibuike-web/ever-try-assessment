import HourGlassIcon from "../icons/hour-glass-icon";
import AlertTriangleIcon from "../icons/alert-triangle-icon";
import CalendarCheckIcon from "../icons/calendar-check-icon";
import type { Card, Item } from "./types";

export const card: Card[] = [
	{
		id: crypto.randomUUID(),
		icon: CalendarCheckIcon,
		number: 94,
		text: "Total number of  scheduled appointments",
	},
	{
		id: crypto.randomUUID(),
		icon: HourGlassIcon,
		number: 32,
		text: "Total number of pending appointments",
	},
	{
		id: crypto.randomUUID(),
		icon: AlertTriangleIcon,
		number: 56,
		text: "Total number of cancelled  appointments",
	},
];

export const initalItems: Item[] = [
	{
		id: crypto.randomUUID(),
		title: "Review today’s appointments",
	},
	{
		id: crypto.randomUUID(),
		title: "Confirm pending appointments",
	},
	{
		id: crypto.randomUUID(),
		title: "Follow up on cancelled bookings",
	},
];
