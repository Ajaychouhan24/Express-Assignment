# Express-Assignment
# 🧑‍💼 User Management Web Application

This is a full-stack User Management system built with **Node.js**, **Express**, **MongoDB**, **EJS**, and **Bootstrap 5**. It supports user registration, login/logout with sessions, and CRUD operations for user profiles. The UI is fully responsive and styled with Bootstrap.

## 🚀 Features

- ✅ User Registration with input validation
- ✅ Secure Login/Logout using sessions
- ✅ CRUD operations for user profiles (username, email, age)
- ✅ Protected routes using middleware
- ✅ Responsive UI using Bootstrap 5

---

## 📁 Project Structure (MVC)

The project follows the **Model-View-Controller (MVC)** pattern for clean separation of concerns:

- **Model** – Defines the structure of the user data using Mongoose (`userModel.js`).
- **View** – EJS templates render dynamic HTML pages (`login.ejs`, `home.ejs`, etc.).
- **Controller** – Handles logic and interactions between model and view (`controller.js`).

---

## 📦 Modules Used

### 1. **Express**
Used to create the backend server and define application routes. It handles HTTP requests and connects controllers to views.

### 2. **Mongoose**
Acts as an Object Data Modeling (ODM) library for MongoDB. It defines schemas and performs database operations.

### 3. **EJS (Embedded JavaScript)**
Templating engine to dynamically render HTML pages using server-side data like usernames, errors, and profile info.

### 4. **express-session**
Manages user sessions securely. It stores session data on the server and authenticates access to protected pages.

### 5. **bcrypt**
Used to hash user passwords during registration and validate them during login to ensure secure authentication.

### 6. **Bootstrap 5**
Provides a responsive, mobile-friendly, and visually appealing front-end interface with styled forms, tables, and alerts.

---

## 🛠️ How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-management-app.git
   cd user-management-app
   
2. Install dependencies:
npm install
Set up MongoDB (local or Atlas), and configure your MongoDB URI in db.js.

3. Run the server:
node app.js

4. Open in browser:
http://localhost:3000
