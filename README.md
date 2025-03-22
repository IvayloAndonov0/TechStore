# TechStore

TechStore is a full-stack React application that serves as a marketplace for technology-related products. It features both public and private sections, allowing users to browse tech offers, create their own, and interact with the platform dynamically. The app communicates with a custom Express.js server using MongoDB for data storage.

## Features

### Public Pages
- **Home Page** – Displays the three most recent tech offers.
- **Catalog Page** – Lists all available tech offers.
- **About Page** – Provides information about the company.
- **Details Page** – Shows details about a specific tech offer.
- **Login & Register** – Allows users to authenticate.

### Private Pages (Authenticated Users Only)
- **Create Page** – Users can create new tech offers.
- **Details Page** – Owners can edit or delete their tech offers. Non-owners can express interest in a specific tech.
- **Profile Page** – Users can view their created and preferred tech offers.
- **Logout** – Logs out the user and redirects them appropriately.

### Additional Features
- **Dynamic Navigation** – The navigation updates based on authentication status.
- **REST API Communication** – The frontend interacts with a custom Express.js backend with MongoDB.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/IvayloAndonov0/TechStore.git
   cd TechStore
   ```
2. Install dependencies for the frontend:
   ```sh
   cd client
   npm install
   ```
3. Install dependencies for the backend:
   ```sh
   cd server
   npm install
   ```

## Running the App

1. Start the backend server:
   ```sh
   cd server
   npm start
   ```
2. Start the frontend:
   ```sh
   cd client
   npm start
   ```

The application should now be running on `http://localhost:5173` (or another port if configured).

## Technologies Used
- **Frontend:** React, React Router, Context API
- **Backend:** Express.js, MongoDB, Mongoose
- **Authentication:** JSON Web Tokens (JWT)

