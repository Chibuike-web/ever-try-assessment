import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import LogIn from "./pages/login";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/login" />,
	},
	{
		path: "/login",
		element: <LogIn />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
