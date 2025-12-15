import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type ButtonProps = {
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={cn(" w-full h-12 bg-noble-green-500 text-noble-black-0 rounded-[8px]", className)}
		>
			{children}
		</button>
	);
}
