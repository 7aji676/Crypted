"use client";

import Link from "next/link";
import { FormEvent } from "react";
import "../auth.css";

export default function LoginPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Login logic later
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-header">
          <div className="brand-mark">K</div>

          <h1>Welcome back</h1>
          <p>Sign in to access your accounts.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="field">
            <div className="field-label">
              <label htmlFor="password">Password</label>

              <Link href="#" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Sign in
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link href="/register">Create one</Link>
        </p>
      </section>
    </main>
  );
}