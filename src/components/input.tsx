import { cn } from "../lib/utils";

export default function Input({
	type,
	id,
	value,
	name,
	placeholder,
	className,
	onChange,
}: {
	type: string;
	id: string;
	name: string;
	value: string | number;
	placeholder: string;
	className?: string;
	onChange: (value: string, name?: string) => void;
}) {
	return (
		<input
			type={type}
			id={id}
			placeholder={placeholder}
			name={name}
			value={value}
			className={cn(
				"w-full bg-noble-black-600 border border-noble-black-500 rounded-[8px] h-12 pr-4 pl-14 text-noble-black-0 placeholder:text-noble-black-400 focus:outline-0 focus:ring-4 focus:ring-noble-input-outline focus:border focus:border-noble-green-500",
				className
			)}
			onInput={(e) => {
				const target = e.target as HTMLInputElement;
				onChange(target.value, target.name);
			}}
		/>
	);
}
