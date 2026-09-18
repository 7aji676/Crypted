"use client";

import Link from "next/link";
import { useState } from "react";
import "./dashboard.css";

type Account = {
  id: number;
  platform: string;
  email: string;
  lastUpdated: string;
};

const accounts: Account[] = [
  {
    id: 1,
    platform: "Netflix",
    email: "john@example.com",
    lastUpdated: "2 hours ago",
  },
  {
    id: 2,
    platform: "Spotify",
    email: "john@example.com",
    lastUpdated: "Yesterday",
  },
  {
    id: 3,
    platform: "Discord",
    email: "john@example.com",
    lastUpdated: "3 days ago",
  },
  {
    id: 4,
    platform: "GitHub",
    email: "john@example.com",
    lastUpdated: "5 days ago",
  },
];

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  const filteredAccounts = accounts.filter((account) =>
    `${account.platform} ${account.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="dashboard-brand">
            <div className="brand-mark">K</div>
            <span>KeyVault</span>
          </div>

          <nav className="navigation">
            <Link href="/dashboard" className="nav-item active">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              Dashboard
            </Link>

            <Link href="/dashboard/accounts" className="nav-item">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="7" y1="15" x2="11" y2="15" />
              </svg>
              Accounts
            </Link>

            <Link href="/profile" className="nav-item">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
              </svg>
              Profile
            </Link>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <button className="logout-button">
            <svg viewBox="0 0 24 24">
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
              <path d="M21 19V5a2 2 0 0 0-2-2h-6" />
            </svg>
            Sign out
          </button>
        </div>
      </aside>

      <section className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Overview</p>

            <h1>Dashboard</h1>

            <p className="header-description">
              Manage your accounts from one place.
            </p>
          </div>

          <div className="user-menu">
            <div className="user-avatar">JD</div>

            <div className="user-info">
              <strong>John Doe</strong>
              <span>john@example.com</span>
            </div>
          </div>
        </header>

        <section className="stats-grid">
          <article className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>

            <div>
              <span>Total accounts</span>
              <strong>12</strong>
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <div>
              <span>Protected</span>
              <strong>12</strong>
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l3 2" />
              </svg>
            </div>

            <div>
              <span>Recently updated</span>
              <strong>3</strong>
            </div>
          </article>
        </section>

        <section className="accounts-section">
          <div className="section-header">
            <div>
              <h2>Your accounts</h2>

              <p>Services connected to your account.</p>
            </div>

            <button className="add-account-button">
              <span>+</span>
              Add account
            </button>
          </div>

          <div className="accounts-toolbar">
            <div className="search-box">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="M16 16l5 5" />
              </svg>

              <input
                type="search"
                placeholder="Search accounts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="accounts-list">
            {filteredAccounts.map((account) => (
              <Link
                href={`/dashboard/accounts?id=${account.id}`}
                className="account-row"
                key={account.id}
              >
                <div className="platform-icon">
                  {account.platform.charAt(0)}
                </div>

                <div className="account-main">
                  <strong>{account.platform}</strong>

                  <span>{account.email}</span>
                </div>

                <div className="account-updated">
                  <span>Last updated</span>

                  <strong>{account.lastUpdated}</strong>
                </div>

                <span
                  className="account-menu"
                  aria-label={`Open ${account.platform}`}
                >
                  ›
                </span>
              </Link>
            ))}

            {filteredAccounts.length === 0 && (
              <div className="empty-state">
                <strong>No accounts found</strong>

                <span>Try a different search.</span>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}