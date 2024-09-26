# Contact Management App - Backend

This is the backend code for the Contact Management App, built using Express.js and MongoDB. The app provides a RESTful API for managing contacts, including creating, updating, deleting, and retrieving contact information.

## Features

- User authentication and authorization.
- CRUD operations for managing contacts.
- Secure password hashing and token-based authentication.
- Error handling and input validation.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A MongoDB account and a connection string.

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/pratishthasaini/contact-manager-app.git
cd contact-manager-app
```
2. **Install dependencies**:

```bash
npm install
```

3. **Environment Variables Setup**:

  Create a .env file in the root directory and add the following variables:

For `.env`:
```markdown
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PORT=5001
```

- MONGODB_URI: Replace your-mongodb-connection-string with your actual MongoDB connection string.
- JWT_SECRET: Set your secret key for JWT token generation.
- PORT: Specify the port number for the server (default is 5000).

4. **Run the Application**:
   
  This project uses nodemon for automatic server restarts when file changes are detected.
  Start the server with nodemon:

```bash
npm install -g nodemon
npm run dev
```
  The server will start, and the app will be running on the specified port.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js

## License
  This project is licensed under the MIT License.
