import { useState } from "react";
import { useNavigate } from "react-router";
import { createUser } from "../api";
import { setUsername } from "../context";

export default function SignupPage() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        try {
            await createUser(username);
            setUsername(username);
            navigate("/");
        } catch {
            alert("Couldn't signup");
        }
        
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-96">
            <div className="w-full px-6">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            Create Account
                        </h1>
                        <p className="text-gray-500">Sign up to get started</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username Field */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="your username"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
