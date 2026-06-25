# Shubham Chavan | Portfolio

A modern, high-performance portfolio website built with **React**, **TypeScript**, **TanStack Start (SSR)**, **Tailwind CSS v4**, and **Vite**.

---

## 🚀 Getting Started

### 📋 Prerequisites
You will need [Node.js](https://nodejs.org/) installed on your machine.

### 🛠️ Installation
Install the project dependencies:
```bash
npm install
```

### 💻 Development Server
Start the interactive development server:
```bash
npm run dev
```
Open [http://localhost:8080](http://localhost:8080) in your browser to view the application.

### 📦 Production Build
Build the application for production (optimizes code for SSR and client delivery):
```bash
npm run build
```

### 👁️ Production Preview
Preview the production build locally before deploying:
```bash
npm run preview
```

---

## 🎨 Customizing Your Portfolio

All main portfolio content is managed dynamically in the main portfolio component:
📂 **`src/components/Portfolio.tsx`**

### 🧑‍💻 1. Updating Profile Photo
1. Place your photo in the images directory: `src/images/portfolio_pfp.jpeg`.
2. The image is imported and rendered automatically in `src/components/Portfolio.tsx` using Vite asset importing. If you change the filename, update the import statement at the top of the file:
   ```typescript
   import pfpImage from "@/images/your_new_filename.jpg";
   ```

### 💼 2. Adding / Editing / Removing Experiences
The experience section is split into **Current** and **Past** roles in the JSX of `src/components/Portfolio.tsx`.

* **Current Role**: Located around line 167 (under the `{/* CURRENT | dark, prominent */}` comment). Modify the company name, role, technology tags, and bullet points directly in the JSX.
* **Past Roles**: Located around line 223 (under the `{/* PAST */}` comment). Modify or duplicate the `<article>` block for additional past experiences.

### 🌟 3. Adding / Editing / Removing Featured Projects
Projects are configured in the `featured` array at the top of `src/components/Portfolio.tsx` (around line 46):
```typescript
const featured = [
  {
    name: "PolyChat",
    tag: "AI · Realtime · MERN",
    desc: "AI-powered real-time chat platform with 90%+ accurate dynamic cross-lingual translation built on Socket.io.",
    icon: Server, // Import any Lucide icon from "lucide-react" at the top of the file
  },
  // Add/remove items here
];
```
* **To add a project:** Simply add a new object to this array.
* **To remove a project:** Remove the object from the array.

### 🌐 4. Adding / Editing / Removing Open Source Contributions
Open source contributions are configured in the `openSource` array at the top of `src/components/Portfolio.tsx` (around line 29):
```typescript
const openSource = [
  {
    org: "Google DeepMind | Concordia",
    title: "Migrated Gemini API integration to unified SDK",
    blurb: "Authored and merged Pull Requests modernizing Concordia's Gemini integration onto the unified SDK...",
    icon: Brain,
  },
  // Add/remove items here
];
```

### 🏆 5. Updating Achievements / Stats
Competitve programming statistics and milestones are configured in the `achievements` array (around line 67):
```typescript
const achievements = [
  { label: "LeetCode", value: "Knight", sub: "Max Rating 1969", icon: Code2 },
  // ...
];
```

### 📞 6. Updating Contact / Social Links
Locate the `ContactLink` components in the `<footer>` section (around line 397):
```tsx
<ContactLink
  href="mailto:shubham.sc0907@gmail.com"
  icon={Mail}
  label="Email"
  value="shubham.sc0907@gmail.com"
/>
```
Update the `href` and `value` props to your personal email, LinkedIn, and GitHub usernames.
