# Full-Stack Application

A modern full-stack web application built with Express.js backend and a frontend component.

## Project Structure

```
Full-stack/
├── backend/          # Node.js/Express backend server
│   ├── index.js      # Main server file
│   ├── package.json  # Backend dependencies
│   └── node_modules/ # Installed packages
└── frontend/         # Frontend application
```

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB with Mongoose (v9.1.5)
- **Development**: Nodemon (v3.1.11)
- **Utilities**:
  - CORS (v2.8.5) - Handle cross-origin requests
  - dotenv (v17.2.3) - Environment variable management
  - Router (v2.2.0) - Routing utility

### Frontend
- To be configured

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yakajay/full-stack.git
   cd Full-stack
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the `backend` directory:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Install frontend dependencies** (when configured)
   ```bash
   cd ../frontend
   npm install
   ```

## Running the Application

### Start the Backend Server
```bash
cd backend
npm start
```

The backend server will run with Nodemon, automatically restarting on file changes.

### Start the Frontend
```bash
cd frontend
npm start
```

(Configuration needed)

## Available Scripts

### Backend
- `npm start` - Start the development server with Nodemon
- `npm test` - Run tests (not yet configured)

## API Endpoints

To be documented as endpoints are created.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Commit with clear messages
4. Push to your branch
5. Open a pull request

## License

ISC License - See `LICENSE` file for details

## Author

- **GitHub**: [@yakajay](https://github.com/yakajay)

---

**Last Updated**: January 21, 2026
