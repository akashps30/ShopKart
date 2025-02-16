# 🛒 Shopkart - E-commerce Website

Shopkart is a fully functional **MERN stack** e-commerce platform with features like user authentication, product management, cart functionality, payment integration, and order tracking.

Live Demo: https://shopkart-7kq2.onrender.com

## 🚀 Features

- **User Authentication & Authorization** (Login, Register, JWT-based authentication)
- **Admin Dashboard** (Product & Order Management)
- **Product Listings & Search** (Filter & Sort)
- **Shopping Cart & Checkout** (Add/Remove Items)
- **Secure Payments** (Integrated with Stripe)
- **Order History & Tracking**
- **Review & Ratings System**
- **Responsive UI** (Optimized for all devices)
- **RESTful API** (Built with Express.js & MongoDB)

---

## 🏗️ Tech Stack

### Frontend:
- React.js (CRA)
- Redux (State Management)
- Axios (API Requests)
- React Router DOM
- Material UI / Bootstrap for styling

### Backend:
- Node.js & Express.js
- MongoDB & Mongoose (Database)
- JWT Authentication
- Stripe API for Payments
- Multer (File Uploads)

---

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/shopkart.git
cd shopkart

2️⃣ Install Dependencies
cd frontend
npm install

cd ../backend
npm install

3️⃣ Set Up Environment Variables
Create a .env file in the backend directory and add the following:

PORT=5000
DB_URI=

STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
JWT_SECRET=
JWT_EXPIRE=
COOKIE_EXPIRE=
SMTP_SERVICE=
SMTP_MAIL=
SMTP_PASSWORD=
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

🛠 API Endpoints

🛒 User Routes
POST /api/users/register → Register User
POST /api/users/login → Login User
GET /api/users/me → Get User Profile

📦 Product Routes
GET /api/products → Get All Products
POST /api/products/new → Create Product (Admin)

🛍 Order Routes
POST /api/orders → Create Order
GET /api/orders/:id → Get Order Details
