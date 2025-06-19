# TULWET-FOOTBALL-CLUB-MANAGER
# ⚽ ClubTrack - Tulwet Football Club Manager

**ClubTrack** is a fully responsive web application designed to help local football clubs efficiently manage their records, including players, uniforms, finances, and club officials. Built with HTML, CSS, and JavaScript, it requires no backend to function and can be enhanced with JSON Server for data persistence.

---

## 🧩 Features

### 👤 Player Management

* Add player details (name, age, position, jersey number)
* Display players in a mobile-friendly card layout
* Remove players

### 🧥 Uniform Tracking

* Manage uniform inventory by size and quantity
* Update or delete uniform records

### 💵 Finance Management

* Record income and expenses
* Display total income, total expenses, and balance
* View transaction history

### 🧑‍💼 Club Management

* Add club officials with roles and contacts
* Display and manage officials list

### 🧰 Bonus Features

* Responsive card layout on mobile
* Summary sections for finance
* Compatible with JSON Server

---

## 💻 Technologies Used

* **HTML5** – Page structure
* **CSS3** – Responsive styling with Flexbox and Grid
* **JavaScript** – Dynamic UI and logic
* **localStorage** – Data persistence (no database required)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/amos-kipkorir/TULWET-FOOTBALL-CLUB-MANAGER.git
cd clubtrack
```

### 2. Open in Browser

Just open `index.html` in your browser.

> ✅ Works offline — no backend required.

---

## 📁 Folder Structure

```
clubtrack/
├── index.html         # Main structure
├── style.css          # Styles and responsive layout
├── script.js          # JavaScript logic
├── db.json            # Optional: JSON Server data
├── assets/            # Images and icons
└── README.md          # Project documentation
```

---

## 🌐 Optional: Use JSON Server

Simulate a REST API:

```bash
npm install -g json-server
json-server --watch db.json
```

Visit: `http://localhost:3000`

---

## 👤 Author

**AMOS KIPKORIR**
Designed to support grassroots and local football club operations in Kenya.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
