import type { ComponentType } from "react";

export type Card = {
	id: string;
	icon: ComponentType;
	number: number;
	text: string;
};

export type Item = {
	id: string;
	title: string;
};
