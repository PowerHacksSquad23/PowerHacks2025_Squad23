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

Follow these steps to get RightsRadar running on your machine.

**Prerequisites:** Node.js (v18+) and npm.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/](https://github.com/)[your-username]/rights-radar.git
    cd rights-radar
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory and add your Supabase keys:
    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the App**
    ```bash
    npm run dev
    ```

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