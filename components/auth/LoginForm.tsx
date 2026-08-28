"use client";

import { FormEvent, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginForm() {
  // Store the entered email
  const [email, setEmail] = useState("");

  // Store the entered password
  const [password, setPassword] = useState("");

  // Store error messages
  const [error, setError] = useState("");

  // Disable the login button while checking credentials
  const [loading, setLoading] = useState(false);

  // Handle login form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Remove the previous error message
    setError("");

    // Check whether the fields are empty
    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }

    setLoading(true);

    try {
      // Send the entered email and password to the login API
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // Read the response from the backend
      const data = await response.json();

      // If credentials are correct, open the admin dashboard
      if (response.ok && data.success) {
        window.location.href = "/admin/dashboard";
        return;
      }

      // Show an error if the credentials are incorrect
      setError(data.message || "Invalid email or password");
    } catch {
      // Show an error if the API request fails
      setError("Unable to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email address field */}
      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      {/* Password field */}
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      {/* Remember me and forgot password options */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-[#66736a]">
          <input
            type="checkbox"
            className="h-4 w-4 accent-[#439646]"
          />
          Remember Me
        </label>

        <button
          type="button"
          className="font-medium text-[#439646] hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      {/* Display login error message */}
      {error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </p>
      )}

      {/* Login button */}
      <Button type="submit" disabled={loading}>
        {loading ? "Logging In..." : "Log In"}
      </Button>
    </form>
  );
}