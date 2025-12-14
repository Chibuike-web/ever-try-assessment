import type { ComponentType } from "react";

type CardProps = {
	icon: ComponentType;
	number: number;
	text: string;
};

export function Card({ text, icon: Icon, number }: CardProps) {
	return (
		<div className="bg-glass-fill-gradient p-6 rounded-[20px] overflow-hidden w-full">
			<div className="flex items-center gap-[14px]">
				<span>
					<Icon />
				</span>
				<h2 className="font-bold text-[32px] text-noble-black-0">{number}</h2>
			</div>
			<p className="text-noble-black-0 font-bold mt-6">{text} </p>
		</div>
	);
}
