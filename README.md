
# Express-Assignment

## User Management Web Application

This is a full-stack User Management system built with **Node.js**, **Express**, **MongoDB**, **EJS**, and **Bootstrap 5**. It supports user registration, login/logout with sessions, and CRUD operations for user profiles. The UI is fully responsive and styled with Bootstrap.

## Features

- User Registration with input validation  
- Secure Login/Logout using sessions  
- CRUD operations for user profiles (username, email, age)  
- Protected routes using middleware  
- Responsive UI using Bootstrap 5  

---

## Project Structure (MVC)

The project follows the **Model-View-Controller (MVC)** pattern for clean separation of concerns:

- **Model** – Defines the structure of the user data using Mongoose (`userModel.js`).
- **View** – EJS templates render dynamic HTML pages (`login.ejs`, `home.ejs`, etc.).
- **Controller** – Handles logic and interactions between model and view (`controller.js`).

```
UserManagementApp/
│
├── app.js                     # Main app entry point
├── package.json               # Project metadata and dependencies
├── README.md                  # Project documentation
│
├── config/
│   └── db.js                  # MongoDB connection setup
│
├── controller/
│   └── controller.js          # Handles user registration, login, CRUD logic
│
├── middleware/
│   └── auth.js                # Route protection middleware
│
├── model/
│   └── userModel.js           # Mongoose schema for users
│
├── routes/
│   └── routing.js             # All Express routes
│
└── views/                     # EJS templates (UI)
    ├── login.ejs              # Login form
    ├── register.ejs           # Register form
    ├── home.ejs               # Dashboard with user table
    └── editUser.ejs           # Edit user form
```

---

## Modules Used

### 1. Express  
Used to create the backend server and define application routes. It handles HTTP requests and connects controllers to views.

### 2. Mongoose  
Acts as an Object Data Modeling (ODM) library for MongoDB. It defines schemas and performs database operations.

### 3. EJS (Embedded JavaScript)  
Templating engine to dynamically render HTML pages using server-side data like usernames, errors, and profile info.

### 4. express-session  
Manages user sessions securely. It stores session data on the server and authenticates access to protected pages.

### 5. bcrypt  
Used to hash user passwords during registration and validate them during login to ensure secure authentication.

### 6. Bootstrap 5  
Provides a responsive, mobile-friendly, and visually appealing front-end interface with styled forms, tables, and alerts.

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/user-management-app.git
cd user-management-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up MongoDB (local or Atlas), and configure your MongoDB URI in `config/db.js`.

4. Run the server:

```bash
node app.js
```

5. Open in browser:

```
http://localhost:3000
```

---

## Screenshots

**Register User**  

![Register](https://github.com/user-attachments/assets/76094d90-3496-4316-a16a-22b966caf62c)

**Login User**  

![Login](https://github.com/user-attachments/assets/3a0f20cc-534a-46b3-ad8e-9b35f0395f82)

**Home Page** 

![Home](https://github.com/user-attachments/assets/71762c05-dbd9-4bba-9b61-ec70785e32e1)

**Update Page** 

![Edit](https://github.com/user-attachments/assets/9ef70a21-bfcc-40b1-bc3b-f209f41091fb)

**Delete User** 

![Delete](https://github.com/user-attachments/assets/aebfe0a1-2b9c-4ca8-acc3-1f228e1b14bc)
