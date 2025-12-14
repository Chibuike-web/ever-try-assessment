import { useState, type FormEvent } from "react";
import Input from "../components/input";
import MailIcon from "../icons/mail-icon";
import PhoneIcon from "../icons/phone-icon";
import UserIcon from "../icons/user-icon";
import { useNavigate } from "react-router";

const FIELD_LABELS: Record<string, string> = {
	fullName: "Full name",
	email: "Email",
	phoneNumber: "Phone number",
};
export default function LogIn() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
	});
	const [errors, setErrors] = useState<Record<string, string>>({});
	const handleInputChange = (name: string, value: string) => {
		setErrors((prev) => ({
			...prev,
			[name]: "",
		}));
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const navigate = useNavigate();

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();
		const newErrors: Record<string, string> = {};

		Object.entries(formData).forEach(([key, value]) => {
			if (value === "") {
				newErrors[key] = `${FIELD_LABELS[key]} is required`;
			}
		});

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		navigate("/dashboard");
	};
	return (
		<main className="flex items-center justify-center lg:w-screen">
			<div className="flex flex-col lg:flex-row gap-x-[114px] w-full">
				<div className="lg:min-w-[496px] mx-6 lg:ml-40 lg:mr-0 pt-[60px] pb-[100px] ">
					<img src="/logo.svg" />
					<div className="mt-[145px]">
						<h1 className="font-bold text-noble-black-0 text-[36px]">Hi there, ...</h1>
						<p className="font-medium text-noble-black-300 mt-[18px]">
							Get Started with Appointments.
						</p>

						<form className="mt-16" onSubmit={handleFormSubmit}>
							<div className="flex flex-col gap-4 mb-6">
								<label htmlFor="fullName" className="text-noble-black-300 font-medium">
									Full name
								</label>
								<Input
									type="text"
									id="fullName"
									name="fullName"
									value={formData.fullName}
									placeholder="John Doe"
									icon={UserIcon}
									onChange={handleInputChange}
								/>
								{errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
							</div>

							{/* Email address */}
							<div className="flex flex-col gap-4 mb-6">
								<label htmlFor="email" className="text-noble-black-300 font-medium">
									Email address
								</label>
								<Input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									placeholder="johndoe@gmail.com"
									icon={MailIcon}
									onChange={handleInputChange}
								/>
								{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
							</div>
							<div className="flex flex-col gap-4">
								<label htmlFor="phoneNumber" className="text-noble-black-300 font-medium">
									Phone number
								</label>
								<Input
									type="text"
									id="phoneNumber"
									name="phoneNumber"
									placeholder="+2349013347728"
									value={formData.phoneNumber}
									icon={PhoneIcon}
									onChange={handleInputChange}
								/>
								{errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
							</div>
							<button className="mt-12 w-full h-12 bg-noble-green-500 text-noble-black-0 rounded-[8px]">
								Get Started
							</button>
						</form>
					</div>
				</div>
				<div className="w-full lg:min-h-screen">
					<img src="/images/login-page/login-page.webp" className="w-full h-full object-cover" />
				</div>
			</div>
		</main>
	);
}
