"use client";

import { useState } from "react";
import useAuthHandler from "../../hooks/useDashboardAuthHandler";

const LoginForm = () => {
  const {
    error,
    loading,
    email,
    password,
    handleLogin: originalHandleLogin,
    handleEmailChange,
    handlePasswordChange,
  } = useAuthHandler();

  const [validationError, setValidationError] = useState("");

  const validateInputs = () => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    if (!password.trim()) {
      return "Password is required.";
    }
    if (password.length < 5) {
      return "Password must be at least 5 characters long.";
    }
    return "";
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const validationMessage = validateInputs();
    if (validationMessage) {
      setValidationError(validationMessage);
      return;
    }

    setValidationError("");
    originalHandleLogin(e);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-4xl mx-auto p-6 bg-slate-400 rounded-md shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
        Login as Admin
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      {validationError && <p className="text-red-500">{validationError}</p>}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button
        type="submit"
        className={`w-full px-4 py-2 text-white rounded-lg ${
          loading ? "bg-gray-500" : "bg-indigo-600 hover:bg-indigo-700"
        }`}
        disabled={loading}
      >
        {loading ? "loading..." : "login as Admin"}
      </button>
    </form>
  );
};

export default LoginForm;
