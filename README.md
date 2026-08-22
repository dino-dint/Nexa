#   E-Commerce Frontend

A modern and responsive **E-Commerce Frontend** built with **ReactJS**, **Vite**, and **Tailwind CSS**.

This project is designed as a frontend learning project for practicing React fundamentals, component-based architecture, React Router, Context API, reusable components, and static data management.

> **Note:** This project currently uses static JavaScript data instead of a backend API or database.

---

##  Project Overview

This project simulates a modern online technology store where users can browse products, search and filter products, view product details, add products to a shopping cart, manage their wishlist, and proceed through a checkout interface.

The project focuses on building a clean and maintainable React frontend before connecting it to a backend API.

### Main Product Categories

*  Laptops
*  Smartphones
*  Headphones
*  Keyboards
*  Mice
*  Gaming Accessories

---

##  Technologies Used

| Technology   | Purpose                           |
| ------------ | --------------------------------- |
| ReactJS      | Building the user interface       |
| Vite         | Development server and build tool |
| Tailwind CSS | Styling and responsive design     |
| React Router | Page navigation                   |
| Context API  | Global state management           |
| JavaScript   | Application logic                 |
| LocalStorage | Persisting cart/wishlist data     |
| Git & GitHub | Version control                   |

---

##  Features

###  Home Page

* Hero section
* Product categories
* Featured products
* Newsletter section
* Responsive design

###  Products

* Display all products
* Product cards
* Product categories
* Product ratings
* Product prices
* Product stock information

###  Search & Filtering

Users can:

* Search products by name
* Filter products by category
* Browse products based on their category

###  Product Details

Users can view:

* Product image
* Product name
* Product price
* Previous price
* Rating
* Description
* Stock
* Quantity
* Add to Cart button

### 🛒 Shopping Cart

Users can:

* Add products to the cart
* Remove products
* Increase quantity
* Decrease quantity
* View subtotal
* View shipping cost
* View total price

###  Wishlist

Users can:

* Add products to wishlist
* Remove products from wishlist
* View saved products

###  Checkout

The checkout page includes:

* Customer information
* Shipping information
* Order summary
* Total price
* Place Order interface

> This is currently a frontend-only checkout and does not process real payments.

###  Authentication UI

The project includes frontend pages for:

* Login
* Register
* Profile

Authentication is currently simulated using static data.

###  Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

---

#  Project Structure

```text
ecommerce-frontend/
│
├── public/
│   ├── images/
│   │   ├── products/
│   │   │   ├── laptops/
│   │   │   ├── smartphones/
│   │   │   ├── headphones/
│   │   │   ├── keyboards/
│   │   │   └── mice/
│   │   │
│   │   ├── categories/
│   │   ├── banners/
│   │   └── logos/
│   │
│   └── favicon.ico
│
├── src/
│   │
│   ├── assets/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── EmptyState.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MobileMenu.jsx
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductImage.jsx
│   │   │   ├── ProductRating.jsx
│   │   │   └── ProductPrice.jsx
│   │   │
│   │   ├── cart/
│   │   │   ├── CartItem.jsx
│   │   │   ├── CartSummary.jsx
│   │   │   └── CartEmpty.jsx
│   │   │
│   │   └── home/
│   │       ├── Hero.jsx
│   │       ├── Categories.jsx
│   │       ├── FeaturedProducts.jsx
│   │       └── Newsletter.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Checkout.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/
│   │   ├── products.js
│   │   ├── categories.js
│   │   └── users.js
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   ├── WishlistContext.jsx
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/
│   │   ├── useCart.js
│   │   ├── useWishlist.js
│   │   └── useLocalStorage.js
│   │
│   ├── utils/
│   │   ├── formatPrice.js
│   │   ├── formatDate.js
│   │   └── helpers.js
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── README.md
├── eslint.config.js
└── vite.config.js
```

---

# Folder Responsibilities

## `public/`

Contains static files that can be accessed directly by the browser.

Example:

```text
public/images/products/laptops/macbook.jpg
```

Can be used in React with:

```jsx
<img src="/images/products/laptops/macbook.jpg" />
```

---

## `src/components/`

Contains reusable UI components.

### `common/`

General components that can be used throughout the application.

Examples:

* `Button.jsx`
* `Input.jsx`
* `Modal.jsx`
* `Loading.jsx`
* `EmptyState.jsx`

### `layout/`

Components responsible for the overall website layout.

Examples:

* `Navbar.jsx`
* `Footer.jsx`
* `MobileMenu.jsx`

### `product/`

Components related to displaying products.

Examples:

* `ProductCard.jsx`
* `ProductGrid.jsx`
* `ProductRating.jsx`
* `ProductPrice.jsx`

### `cart/`

Components related to the shopping cart.

Examples:

* `CartItem.jsx`
* `CartSummary.jsx`
* `CartEmpty.jsx`

### `home/`

Components specifically used on the homepage.

Examples:

* `Hero.jsx`
* `Categories.jsx`
* `FeaturedProducts.jsx`
* `Newsletter.jsx`

---

# Pages

The `pages/` folder contains complete website pages.

| File                 | Purpose            |
| -------------------- | ------------------ |
| `Home.jsx`           | Homepage           |
| `Products.jsx`       | All products       |
| `ProductDetails.jsx` | Individual product |
| `Cart.jsx`           | Shopping cart      |
| `Wishlist.jsx`       | Saved products     |
| `Checkout.jsx`       | Checkout           |
| `Login.jsx`          | Login page         |
| `Register.jsx`       | Registration page  |
| `Profile.jsx`        | User profile       |
| `About.jsx`          | About the store    |
| `NotFound.jsx`       | 404 page           |

A page usually combines multiple reusable components.

For example:

```text
Home.jsx
   │
   ├── Navbar
   ├── Hero
   ├── Categories
   ├── FeaturedProducts
   ├── Newsletter
   └── Footer
```

---

#  Static Data

The `data/` folder contains the temporary data used by the frontend.

```text
data/
├── products.js
├── categories.js
└── users.js
```

Example product:

```javascript
{
  id: 1,
  name: "MacBook Air M3",
  category: "Laptops",
  price: 1099,
  rating: 4.8,
  stock: 15
}
```

Currently, there is no backend database.

The data flow is:

```text
products.js
     ↓
React Components
     ↓
Pages
     ↓
User Interface
```

---

#  Routing

React Router is used to navigate between pages.

Example routes:

```text
/                       → Home
/products               → Products
/products/:id           → Product Details
/cart                   → Cart
/wishlist               → Wishlist
/checkout               → Checkout
/login                  → Login
/register               → Register
/profile                → Profile
/about                  → About
```

The routes are organized inside:

```text
src/routes/AppRoutes.jsx
```

---

# State Management

The project uses the **React Context API** for global state.

```text
context/
├── CartContext.jsx
├── WishlistContext.jsx
└── AuthContext.jsx
```

### Cart Context

Manages:

* Cart products
* Add to cart
* Remove from cart
* Quantity changes
* Cart total

### Wishlist Context

Manages:

* Wishlist products
* Add to wishlist
* Remove from wishlist

### Auth Context

Manages:

* Current user
* Login state
* Logout state

---

#  Custom Hooks

Custom hooks are stored in:

```text
hooks/
├── useCart.js
├── useWishlist.js
└── useLocalStorage.js
```

They make reusable React logic easier to access.

For example:

```jsx
const { cart, addToCart } = useCart();
```

instead of directly accessing the context everywhere.

---

# 🛠️ Utility Functions

The `utils/` folder contains reusable helper functions.

```text
utils/
├── formatPrice.js
├── formatDate.js
└── helpers.js
```

Example:

```javascript
formatPrice(1099);
```

Result:

```text
$1,099.00
```

---

# ⚙️ Installation

## 1. Clone the project

```bash
git clone <your-github-repository-url>
```

## 2. Enter the project

```bash
cd ecommerce-frontend
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

The terminal will provide the local development URL.

---

#  Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

#  Application Flow

The basic flow of the application is:

```text
main.jsx
    ↓
App.jsx
    ↓
AppRoutes.jsx
    ↓
Pages
    ↓
Components
    ↓
Static Data
```

For example:

```text
/products
     ↓
Products.jsx
     ↓
ProductGrid.jsx
     ↓
ProductCard.jsx
     ↓
products.js
```

---

# 🎯 Learning Objectives

This project is designed to practice:

* React components
* JSX
* Props
* State
* Events
* Conditional rendering
* Rendering lists with `.map()`
* React Router
* Context API
* Custom hooks
* LocalStorage
* Component reusability
* Responsive web design
* Tailwind CSS
* JavaScript array methods
* Git and GitHub
* Basic frontend architecture

---

# 🔮 Future Improvements

The current version uses static data. A future version can connect the frontend to a backend.

### Current Version

```text
React
  ↓
Static JavaScript Data
```

### Future Version

```text
React
  ↓
REST API
  ↓
Laravel
  ↓
MySQL
```

Possible future features:

* User authentication
* Real database
* Admin dashboard
* Product CRUD
* Order management
* Payment integration
* Real API
* Product reviews
* Inventory management
* Search API
* Pagination
* Admin authentication

---

#  Project Purpose

This project is created as a learning project to improve practical frontend development skills using ReactJS.

The goal is to understand how a real-world frontend application can be organized into reusable components, pages, data, state management, and utility functions.

---

## 📄 License

This project is for educational and personal learning purposes.
