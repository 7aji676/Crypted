"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import "./account.css";

function AccountContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  // Temporary data — will come from SQLite later
  const account = {
    id,
    platform: "Netflix",
    email: "john@example.com",
    password: "MySecretPassword123!",
    createdAt: "September 12, 2026",
    updatedAt: "September 17, 2026",
  };

  const copyPassword = async () => {
    await navigator.clipboard.writeText(account.password);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(account.email);
  };

  return (
    <main className="account-page">
      <div className="account-container">

        {/* Header */}
        <header className="account-header">
          <Link href="/dashboard" className="back-button">
            <svg viewBox="0 0 24 24">
              <path d="M19 12H5" />
              <path d="M11 18l-6-6 6-6" />
            </svg>

            Back to dashboard
          </Link>
        </header>

        {/* Account heading */}
        <section className="account-title">
          <div className="platform-large">
            {account.platform.charAt(0)}
          </div>

          <div>
            <p className="account-label">Account</p>
            <h1>{account.platform}</h1>
            <p>{account.email}</p>
          </div>
        </section>

        {/* Main card */}
        <section className="details-card">
          <div className="details-header">
            <div>
              <h2>Account details</h2>
              <p>
                Credentials and information for this account.
              </p>
            </div>

            <button className="edit-button">
              <svg viewBox="0 0 24 24">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z" />
              </svg>

              Edit
            </button>
          </div>

          <div className="details-body">

            {/* Email */}
            <div className="detail-field">
              <label>Email / Username</label>

              <div className="value-row">
                <span>{account.email}</span>

                <button
                  className="copy-button"
                  onClick={copyEmail}
                  aria-label="Copy email"
                >
                  <svg viewBox="0 0 24 24">
                    <rect
                      x="9"
                      y="9"
                      width="11"
                      height="11"
                      rx="2"
                    />

                    <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Password */}
            <div className="detail-field">
              <label>Password</label>

              <div className="value-row password-row">
                <span>
                  {showPassword
                    ? account.password
                    : "••••••••••••••••"}
                </span>

                <div className="value-actions">

                  {/* Copy */}
                  <button
                    className="copy-button"
                    onClick={copyPassword}
                    aria-label="Copy password"
                  >
                    {copied ? (
                      <svg viewBox="0 0 24 24">
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24">
                        <rect
                          x="9"
                          y="9"
                          width="11"
                          height="11"
                          rx="2"
                        />

                        <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
                      </svg>
                    )}
                  </button>

                  {/* Show / hide */}
                  <button
                    className="copy-button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24">
                        <path d="M3 3l18 18" />
                        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                        <path d="M9.9 4.2A10.8 10.8 0 0 1 12 4c5 0 8.5 4 9.5 8-.4 1.5-1.2 2.8-2.2 3.9" />
                        <path d="M6.2 6.2C4.4 7.5 3.4 9.4 2.5 12c1 4 4.5 8 9.5 8 1.4 0 2.7-.3 3.9-.9" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24">
                        <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>

                </div>
              </div>
            </div>

            {/* Platform */}
            <div className="detail-field">
              <label>Platform</label>

              <div className="value-row">
                <span>{account.platform}</span>
              </div>
            </div>

          </div>
        </section>

        {/* Metadata */}
        <section className="metadata-card">
          <div className="metadata-item">
            <span>Created</span>
            <strong>{account.createdAt}</strong>
          </div>

          <div className="metadata-divider" />

          <div className="metadata-item">
            <span>Last updated</span>
            <strong>{account.updatedAt}</strong>
          </div>
        </section>

        {/* Danger zone */}
        <section className="danger-zone">
          <div>
            <h2>Delete account</h2>

            <p>
              Permanently remove this saved account from your vault.
            </p>
          </div>

          <button className="delete-button">
            Delete account
          </button>
        </section>

      </div>
    </main>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={null}>
      <AccountContent />
    </Suspense>
  );
}