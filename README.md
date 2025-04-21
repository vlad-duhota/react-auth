# ⚛️ React Frontend for NestJS Auth API

This frontend is built with **React** to interact with the custom authentication API developed using **NestJS** and **MongoDB**. It provides a clean and responsive interface for user registration, login, and displaying user information after authentication.

## 🧩 Key Features

- **User Registration & Login**: Forms connected to the backend API for creating new users and logging in.
- **Axios Integration**: Handles all HTTP requests to the API, including sending the JWT token in headers for protected routes.
- **JWT Token Handling**: Stores token securely in local storage and includes it in requests to protected endpoints.
- **Conditional UI Rendering**: Displays UI based on user’s authentication status.
- **React Hooks**: Uses `useState`, `useEffect`, and custom hooks to manage state and side effects.
- **Basic Routing**: React Router for navigating between pages like login, register, and dashboard.

## 🚀 Technologies Used

- **React** – For building dynamic UI components.
- **Axios** – For making HTTP requests to the backend.
- **React Router** – For page navigation.
- **JavaScript / TypeScript** – Depending on the setup.
- **LocalStorage** – To store and retrieve the JWT token.

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# test
$ yarn test

# eject
$ yarn eject

# build
$ yarn build
```

## Stay in touch

- Author - Dukhota Vladyslav
- Email - vladyslavduhota@gmail.com
<!-- - Website - [https://nestjs.com](https://nestjs.com/) -->