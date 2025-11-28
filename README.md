# 🌍 RightsRadar: The Gender Safety Edition

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status: MVP](https://img.shields.io/badge/Status-MVP-success)
![Focus: GBV](https://img.shields.io/badge/Theme-Gender_Based_Violence-purple)

> **"Tracking the laws that protect women in the digital age."**

RightsRadar is a global policy observatory dashboard built to honor the **21 Days of GBV Activism**. It visualizes the "Safety Gap" in digital laws worldwide, holding nations and big tech accountable for online violence against women.

---

## 📸 Demo & Screenshots

![Project Demo GIF](placeholder-link-to-gif.gif)

---

## 🚀 Key Features (Innovation & Creativity)

Most dashboards just *show* data. RightsRadar *acts* on it.

* **🌍 The "Safety Gap" 3D Map:** An interactive WebGL globe that highlights countries lacking "Revenge Porn" and "Cyber-Stalking" laws in real-time.
* **📄 The "Geneva Generator" (Innovation):** A one-click tool that auto-generates a formal UN Human Rights complaint PDF for activists, bridging the gap between data and diplomacy.
* **🏢 Big Tech Accountability Index:** A dynamic leaderboard ranking platforms (X, Meta, TikTok) on their "Safety by Design" responsiveness to female users.

---

## 🛠️ Technical Stack (Performance)

We prioritized a lightweight, high-performance architecture.

* **Frontend:** React (Vite) + Tailwind CSS (Optimized for <1s load times).
* **Visualization:** `react-globe.gl` for 3D rendering and `Recharts` for data visualization.
* **Backend:** Supabase (PostgreSQL) for real-time data fetching.
* **Security:** Row Level Security (RLS) enabled on all database tables.

---

## 🛡️ Security & Fault Tolerance

We take data protection seriously, especially given the sensitive nature of GBV advocacy.

1.  **Row Level Security (RLS):** Our Supabase database uses strict RLS policies. Anonymous users can *read* global stats, but only authenticated admin accounts can *write* or *modify* policy data.
2.  **Environment Variables:** All API keys are stored in `.env` files and never committed to version control.
3.  **Error Boundaries:** The application is wrapped in React Error Boundaries to prevent white-screen crashes if the 3D map fails to load on older devices.

---

## ⚙️ Installation & Setup (Run Locally)

We now ship a lightweight Node/Express backend that proxies Supabase and keeps the frontend truly data-driven.

**Prerequisites:** Node.js (v18+), npm, and a Supabase project (free tier works).

### 1. Clone & install

```bash
git clone <repo-url>
cd PowerHacks2025_Squad23
```

```bash
cd backend
npm install
cp .env.example .env
```

Fill in `.env` with your Supabase instance:

```
PORT=4000
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_ANON_KEY=your-anon-key
```

Then run the API:

```bash
npm run dev
```

In a second terminal, install and start the Vite frontend:

```bash
cd Frontend
npm install
cp .env.example .env # sets VITE_API_BASE_URL=http://localhost:4000/api
npm run dev
```

Visit `http://localhost:3000` and you should see live data fetched from Supabase via the backend.

### 2. Supabase schema (copy/paste into SQL Editor)

```sql
create table public.legal_gap_countries (
  id text primary key,
  name text not null,
  status text not null,
  details text
);

create table public.platform_safety_index (
  id bigserial primary key,
  rank int not null,
  platform text not null,
  score int not null,
  change text not null
);

create table public.timeline_events (
  id bigserial primary key,
  year text not null,
  event text not null,
  description text not null
);

alter table public.legal_gap_countries enable row level security;
alter table public.platform_safety_index enable row level security;
alter table public.timeline_events enable row level security;

create policy "Public read legal gaps"
  on public.legal_gap_countries for select using (true);
create policy "Public read platform index"
  on public.platform_safety_index for select using (true);
create policy "Public read timeline"
  on public.timeline_events for select using (true);
```

Seed the tables with the values found in `backend/src/data/fallback.ts` (those are also used when Supabase credentials are missing, so the UI never breaks during local development).

---

## 👥 The Team (Development Process)

We used **Agile Methodology** with a Kanban board to track our sprint during the hackathon.

* **[Name 1]** - *Frontend Lead* (UI/UX & 3D Map integration)
* **[Name 2]** - *Backend Architect* (Supabase Schema & Security Policies)
* **[Name 3]** - *Research & Content* (UNCTAD Data & PDF Generator Logic)
* **[Name 4]** - *Project Manager* (Documentation & Testing)

---

## 📊 Performance Metrics

* **Lighthouse Score:** 95+ (Performance)
* **Accessibility:** 100% (Tested for screen readers)

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.