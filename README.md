# User Registration and Address Storage API

This project is a simple Node.js application that allows users to register and store their addresses. It uses SQLite as the relational database to manage user and address data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- User registration
- Storing multiple addresses for each user
- Fetching all registered users

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Web framework for building APIs.
- **SQLite**: Lightweight relational database.
- **dotenv**: For managing environment variables.
- **morgan**: HTTP request logger middleware for Node.js.

## Installation

1. Clone the repository:
   git clone <your-repo-url>

2. Navigate into the project directory:
   cd user-address-api

3. Install the dependencies:
   npm install


## Usage
1. Start the server:
   npm start

2. The server will run on http://localhost:4000 (or the port specified in your environment variables).


## API Endpoints

1. # Register
   Endpoint: POST /user/api/register
   
  Request Body:
  {
    "name": "John Doe",
    "door_no": "123",
    "street": "Main St",
    "city": "Springfield",
    "pin_code": "123456"
  }


2. # Get All Users
   Endpoint: POST /user/api/users
   
  Response Body:
  [{
    "id": "1",
    "name": "John Doe"
  },
  {
    "id": "2",
    "name": "Jane Smith"
  }]


## License
This project is licensed under the MIT License. See the LICENSE file for details.
