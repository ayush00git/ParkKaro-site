# ParkKaro - Smart Parking Solution Website

ParkKaro is a modern web platform designed to simplify urban parking. It connects drivers with available parking spaces, offering a seamless booking experience for residential, commercial, and public parking.

## 🚀 Features

-   **Home Page**: Engaging hero section, features overview, and reviews.
-   **Find Parking**: Search and filter available parking spaces (Residential, Commercial, Public).
-   **How It Works**: Step-by-step guide for users.
-   **Our Customers**: Statistics and team information to build trust.
-   **Host Module**: Information for space owners to list their properties.
-   **Legal Pages**: Privacy Policy and Terms of Service.
-   **Responsive Design**: Fully optimized for desktop and mobile devices.

## 🛠️ Technology Stack

-   **Framework**: [React](https://react.dev/) (v19)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Routing**: [React Router DOM](https://reactrouter.com/)

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/parkkaro-site.git
    cd parkkaro-site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

---

## 🎨 Design System

### 1. Color Palette

We use the standard **Tailwind CSS** color palette. Below are the primary hex codes used across the website.

#### **Brand Colors**
| Color Name | Tailwind Class | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Brand Orange** | `orange-500` | `#f97316` | Primary accents, Buttons, Highlights |
| **Brand Purple** | `purple-600` | `#9333ea` | Gradients, Hovers, Secondary accents |

#### **Neutral Colors**
| Color Name | Tailwind Class | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Darkest Gray** | `gray-900` | `#111827` | Headings, Footer Background, Dark Text |
| **Dark Gray** | `gray-800` | `#1f2937` | Card borders in dark mode, secondary bg |
| **Body Gray** | `gray-600` | `#4b5563` | Body text, Descriptions |
| **Light Gray** | `gray-200` | `#e5e7eb` | Borders, Placeholders |
| **Off-White** | `gray-50` | `#f9fafb` | Section Backgrounds |
| **White** | `white` | `#ffffff` | Card backgrounds, Text on dark bg |

#### **Functional Colors**
| Color Name | Tailwind Class | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Success Green** | `green-500` | `#22c55e` | Success states, Price, Live stats |
| **Danger Red** | `red-500` | `#ef4444` | Important buttons (Book Now), Badges |
| **Rose** | `rose-500` | `#f43f5e` | Accents in specific cards |
| **Pink** | `pink-500` | `#ec4899` | Accents in specific cards |

### 2. Typography

The website uses the **default Tailwind CSS font stack** (System UI).

**Font Family:**
`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`

**Font Sizes:**

| Size Name | Tailwind Class | CSS Size | usage |
| :--- | :--- | :--- | :--- |
| **Extra Small** | `text-xs` | `12px` | Badges, Helper text |
| **Small** | `text-sm` | `14px` | Navigation, Footer links |
| **Base** | `text-base` | `16px` | Standard body text |
| **Large** | `text-lg` | `18px` | Subtitles, Card titles |
| **Extra Large** | `text-xl` | `20px` | Section sub-headers |
| **2XL** | `text-2xl` | `24px` | Logotype, Card Headers |
| **3XL** | `text-3xl` | `30px` | Page Headings |
| **4XL** | `text-4xl` | `36px` | Hero Headlines (Mobile) |
| **5XL** | `text-5xl` | `48px` | Hero Headlines (Desktop) |
