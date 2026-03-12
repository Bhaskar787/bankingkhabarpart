# 📰 BankingKhabar News Portal

A modern **News Portal Application** built using **React + TypeScript + Vite** that fetches live news data from the WordPress REST API.
The application displays news posts, categories, and detailed articles similar to a real online news platform.

---

## 🚀 Features

* 📰 Display latest news posts from API
* 📂 Category based news filtering
* 📖 Dynamic article detail page
* 🖼️ Featured images from WordPress API
* 🗓️ Nepali Bikram Sambat date display
* 📱 Responsive layout using Bootstrap
* 🔗 Client-side routing with React Router
* ⚡ Fast development using Vite
* 🧩 Component-based architecture

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript (TSX)
* Vite
* React Router DOM
* Axios
* Bootstrap
* React Icons

### API

* WordPress REST API

---

## 📂 Project Structure

```
src
│
├── assets
│   └── banking-logo.jpg
│
├── components
│   ├── Navbar.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PostByCat.tsx
│   └── Top.tsx
│
├── pages
│   ├── Home.tsx
│   ├── Category.tsx
│   └── Detail.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 📡 API Source

News data is fetched from the WordPress REST API:

```
https://bankingkhabar.com/wp-json/wp/v2
```

Endpoints used:

```
/posts
/posts?_embed
/posts/{id}
/posts?categories={id}
/categories
```

---

## 🖥️ Pages

### 🏠 Home Page

* Displays latest news posts
* Featured images
* Category sections

### 📂 Category Page

* Displays news filtered by category
* Dynamic routing

### 📖 Detail Page

* Shows full news article
* Displays featured image and full content

---

## ⚙️ Installation & Setup

Clone the repository

```
git clone https://github.com/bhaskar787/bankingkhabarpart.git
```

Navigate into the project

```
cd bankingkhabarpart
```

Install dependencies

```
npm install
```

Start development server

```
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 📷 Screenshots

Add screenshots of your project here.

Example:

```
/screenshots/home.png
/screenshots/category.png
/screenshots/detail.png
```

---

## 📌 Future Improvements

* 🔎 News search functionality
* 📰 Breaking news slider
* 📄 Pagination
* 🌙 Dark mode
* 📊 Trending news section

---

## 👨‍💻 Author

**Bhaskar Budha**

Frontend Developer

* GitHub: https://github.com/bhasakr787
* Email: [your@email.com](mailto:your@email.com)

---

## ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.
