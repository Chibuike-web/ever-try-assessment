import { useState } from "react";
import avatar from "../assets/dashboard/avatar.png";
import { Card } from "../components/card";
import { card, initalItems } from "../lib/data";
import type { Item } from "../lib/types";
import Input from "../components/input";
import Button from "../components/button";

export default function Dashboard() {
	return (
		<div className="px-[12px]">
			<header className="w-ful max-w-[1416px] bg-noble-black-800 px-12 py-6 rounded-[20px] mt-[12px] mx-auto">
				<div className="w-full flex justify-between items-center">
					<img src="/logo.svg" />
					<div className="flex items-center gap-2">
						<img src={avatar} className="size-8" />
						<span className="text-noble-black-0 font-semibold">Admin</span>
					</div>
				</div>
			</header>

			<div className="mt-10 mx-auto max-w-[1280px] px-12 xl:px-0">
				<h1 className="text-noble-black-0 text-[36px] font-bold mb-[12px]">Welcome, Admin</h1>
				<p className="text-neutral-400">Start day with managing new appointments</p>

				<div className="mt-10 flex w-full justify-between gap-10">
					{card.map((c) => (
						<Card text={c.text} icon={c.icon} number={c.number} key={c.id} />
					))}
				</div>
			</div>

			{/* Items */}
			<div className="mt-10 mx-auto max-w-[1280px] px-12 xl:px-0">
				<Items />
			</div>
		</div>
	);
}

const Items = () => {
	const [isAdding, setIsAdding] = useState(false);
	const [value, setValue] = useState("");
	const [items, setItems] = useState<Item[]>(initalItems);
	const addItem = () => {
		if (!value.trim()) {
			return;
		}

		const newItem = {
			id: crypto.randomUUID(),
			title: value,
		};
		setItems((prev) => [...prev, newItem]);
		setValue("");
		setIsAdding(false);
	};
	const removeItem = (id: string) => {
		setItems((prev) => prev.filter((i) => i.id != id));
	};
	const handleInputChange = (value: string) => {
		setValue(value);
	};

	return (
		<div className="w-full">
			<div className="max-w-2xl">
				{!isAdding && (
					<button
						onClick={() => setIsAdding(true)}
						className="h-12 px-6 bg-noble-black-600 border border-noble-black-500 rounded-[8px] text-noble-black-0"
					>
						Add to List
					</button>
				)}
			</div>

			{isAdding && (
				<div className="flex gap-3 max-w-2xl">
					<Input
						type="text"
						value={value}
						id="input"
						name="input"
						onChange={handleInputChange}
						className="px-4"
						placeholder="Enter item"
					/>

					<Button
						onClick={() => {
							addItem();
						}}
						className="w-max px-4"
					>
						Add
					</Button>

					<button
						onClick={() => {
							setValue("");
							setIsAdding(false);
						}}
						className="h-12 px-4 border border-noble-black-500 rounded-[8px] text-noble-black-300"
					>
						Cancel
					</button>
				</div>
			)}

			<div className="rounded-[12px] overflow-hidden mt-10 w-full">
				{items.map((i) => (
					<div
						key={i.id}
						className="flex items-center justify-between bg-noble-black-600 px-4 h-18 w-full"
					>
						<p className="text-noble-black-0 font-medium truncate px-4">{i.title}</p>

						<Button
							onClick={() => removeItem(i.id)}
							className="text-sm w-max bg-red-500 text-noble-black-0 px-4 h-10"
						>
							Remove
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};
