# car-crud-api
Accenture Learning Program
# Car CRUD Application

## Description
This is a simple Car CRUD application built with Express.js for the backend and Alpine.js with Axios for the frontend.

## Features
- Create, Read, Update, Delete (CRUD) operations for cars
- Toast notifications for actions
- Displays the most popular car make
- Responsive design

## Setup Instructions

### Prerequisites
- Node.js
- npm

### Backend Setup
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the server:
    ```sh
    node server.js
    ```
   The backend server will be running at `http://localhost:3000`.

### Frontend Setup
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Open `index.html` in your browser.

## API Endpoints
- `GET /cars` - Retrieves all cars
- `POST /cars` - Creates a new car
- `PUT /cars/:reg_number` - Updates a car by registration number
- `DELETE /cars/:reg_number` - Deletes a car by registration number

## Function Explanation
The "Most Popular Make" functionality determines the most frequent car make in the current list of cars.

## Deployment
[Include details of your deployment setup, such as GitHub Pages, Heroku, Vercel, etc.]

## Demo
[Provide a link or details for the demo]
