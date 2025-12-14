import type { ComponentType } from "react";

export default function Input({
	type,
	id,
	value,
	name,
	placeholder,
	icon: Icon,
	onChange,
}: {
	type: string;
	id: string;
	name: string;
	value: string | number;
	placeholder: string;
	icon: ComponentType;
	onChange: (name: string, value: string) => void;
}) {
	return (
		<div className="relative w-full">
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				name={name}
				value={value}
				className="w-full bg-noble-black-600 border border-noble-black-500 rounded-[8px] h-12 pr-4 pl-14 text-noble-black-0 placeholder:text-noble-black-400 focus:outline-0 focus:ring-4 focus:ring-noble-input-outline focus:border focus:border-noble-green-500"
				onInput={(e) => {
					const target = e.target as HTMLInputElement;
					onChange(target.name, target.value);
				}}
			/>
			<span aria-hidden className="absolute top-1/2 -translate-y-1/2 left-4">
				<Icon />
			</span>
		</div>
	);
}
