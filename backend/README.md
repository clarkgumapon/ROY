# Expense Tracker Backend

This is the backend service for the Expense Tracker application. It provides a RESTful API for managing expenses and user authentication.

## Features

- User authentication with JWT tokens
- CRUD operations for expenses
- Expense statistics by category and time period
- SQLite database with SQLAlchemy ORM
- FastAPI framework with automatic API documentation

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## API Documentation

Once the server is running, you can access:
- Interactive API docs (Swagger UI): `http://localhost:8000/docs`
- Alternative API docs (ReDoc): `http://localhost:8000/redoc`

## API Endpoints

### Authentication
- POST `/token` - Login to get access token
- POST `/users/` - Create new user

### Expenses
- GET `/expenses/` - List all expenses
- POST `/expenses/` - Create new expense
- GET `/expenses/{expense_id}` - Get specific expense
- PUT `/expenses/{expense_id}` - Update expense
- DELETE `/expenses/{expense_id}` - Delete expense

### Statistics
- GET `/expenses/stats/category` - Get expenses grouped by category
- GET `/expenses/stats/time` - Get expenses within a time period

## Security

- All endpoints except `/token` and `/users/` require authentication
- Passwords are hashed using bcrypt
- JWT tokens are used for authentication
- CORS is configured to allow requests from the frontend

## Database

The application uses SQLite with SQLAlchemy ORM. The database file will be created automatically when you first run the application. 