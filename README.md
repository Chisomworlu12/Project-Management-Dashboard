# Project Management Dashboard

A responsive, high-performance React dashboard built with **Vite**, **TypeScript**, and **Tailwind CSS**. This application features a searchable project database, dynamic status filtering, and a detailed slide-over panel for project specifics.

## 🚀 Features

- **Real-time Search:** Filter through projects by Name or Client instantly.
- **Dynamic Status Badges:** Visual color-coding for "Active", "On Hold", and "Completed" statuses.
- **Scrollable Data Table:** Optimized table view with a sticky header for better UX in long lists.
- **Project Detail Panel:** An interactive detail view to inspect budget, dates, and descriptions.
- **Responsive Design:** Fully fluid layout that handles long text strings via CSS truncation.

## Data Management

The application consumes a structured JSON dataset located in src/data/mockProjects.ts.

- **Mock Data:** Generated to include "stress-test" cases, such as extremely long project names and varying data completeness (e.g., missing budgets or end dates).

- **Type Safety:** A dedicated Project interface ensures that the mock data and the components remain synchronized, preventing runtime errors during filtering or detail rendering.

## 🛠️ Tech Stack

- **Framework:** [React 18 (Vite)](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons/UI:** Custom Tailwind components

## 📦 Installation & Setup

1. **Clone the repository:**

```bash
git clone [your-repo-link]
cd project-dashboard

```

2. **Install dependencies:**

```bash
npm install

```

3. **Run the development server:**

```bash
npm run dev

```

4. **Build for production:**

```bash
npm run build

```

## 🧠 Technical Highlights

### Search & Filter Logic

Implemented a custom filtering engine using `useMemo` to ensure that searching through the dataset remains performant and doesn't trigger unnecessary re-renders.

### The "Table Scroll" Solution

Standard HTML `<table>` elements do not support `max-height` and `overflow` directly. I implemented a wrapper-container strategy with `overflow-y-auto` and utilized `sticky` positioning for the `<thead>` to ensure labels remain visible during data exploration.

### Defensive UI

To handle the "stress test" requirement (long project names), I utilized Tailwind's `truncate` utility combined with fixed `max-width` constraints to prevent layout shifts or horizontal overflow.
