# 🚀 PopX Account SPA

A **pixel-perfect, mobile-first Single Page Application (SPA)** for user registration, login, and profile display.  
Built with **React**, **TypeScript**, and **Vite** — deployable as a fully static site on Vercel.

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18+-blue?logo=react" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## ✨ Features

- 📱 **Responsive Design** – Centered, mobile‑first UI with no horizontal scroll on phones
- 📝 **Modern Forms** – Clean inputs using semantic `<fieldset>` & `<legend>`
- 📞 **Validation** – Enforces **10‑digit phone number**
- ⏭️ **Skip Interaction** – Disabled buttons reveal a **skip icon** on hover
- ☁️ **One‑Click Hosting** – Ready for **Vercel**

---

## 🧰 Tech Stack

- **React 18**, **TypeScript**
- **Vite** dev server & build
- **React Router** for client‑side navigation
- **CSS** (mobile‑first, utility classes or custom styles)

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js** v16 or newer
- **npm** or **yarn**

### Installation

```bash
git clone https://github.com/Dipin-Grover/Project-1-internship-.git
cd popx-spa
npm install
```

### Run Locally

```bash
npm run dev
```
Open: http://localhost:5173

### Build

```bash
npm run build
```
Preview the production build:
```bash
npm run preview
```

---

## 📁 Project Structure

```
popx-spa/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ pages/
│  │  ├─ Welcome.tsx
│  │  ├─ Register.tsx
│  │  ├─ Login.tsx
│  │  └─ Profile.tsx
│  ├─ router/
│  │  └─ index.tsx        # central routes config (optional)
│  ├─ components/         # shared UI pieces (buttons, inputs, etc.)
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ index.html
├─ tsconfig.json
├─ package.json
└─ vite.config.ts
```

### Routes

| Path         | Page        | Purpose                                  |
|--------------|-------------|------------------------------------------|
| `/`          | Welcome     | App landing page                         |
| `/register`  | Register    | Create account (validates 10‑digit phone)|
| `/login`     | Login       | Email + password login                   |
| `/account`   | Profile     | Shows user profile after auth            |

---

## 🔑 Usage

- **Register** at `/register`  
  - Fill all fields; phone must be **exactly 10 digits**  
  - **Create Account** button enables only when form is valid  
  - When disabled, hovering the button shows a **skip icon**  
- **Login** at `/login`  
  - Enter valid email + password to enable **Login**  
- **Profile** at `/account`  
  - Redirects here after successful register/login

> 

---

## 🎯 Validation Details

- **Phone number**: `^[0-9]{10}$` (exactly 10 digits)  
- **Email**: HTML email input or regex like `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`  
- **Buttons**: Disabled state until the form is valid; hover state shows skip icon

---

## 🎨 Responsive Design

- Mobile‑first layout sized for small screens, centered on all viewports
- No horizontal scrolling on handheld devices
- Consistent spacing, readable line‑length, and tap‑target sizes

---

## 🌐 Deployment (Vercel)

1. Ensure `index.html` has the viewport meta:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   ```

2. Add `vercel.json` for SPA rewrites:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

3. Push to GitHub → Import the repo in **Vercel** → Deploy.

> **Tip:** In Vercel, set **Framework Preset** to **Vite** if prompted.

---

## 🧪 Scripts

```jsonc
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview --strictPort"
  }
}
```

---

## 🖼️ Screenshots

Add images for:
- Registration form
- Login form
- Profile page
- Mobile layout

You can keep them in `/public/screens/` and reference them in this README.

---









