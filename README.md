# Your pet API

## Project Overview

This project implements the server-side component of the Your Pet application. It is built on Node.js, utilizing the Express.js framework to implement the API and Mongoose for interacting with the MongoDB database.

## Technologies Used

Here are some of the key technologies and libraries used in this project:

![Node.js](https://img.shields.io/badge/Node.js-14-339933?logo=nodedotjs) - ![Express.js](https://img.shields.io/badge/Express.js-4.18-000000?logo=express) - ![Morgan](https://img.shields.io/badge/Morgan-1.1-000000?logo=express) - ![Multer](https://img.shields.io/badge/Multer-1.4-000000?logo=express) - ![MongoDB](https://img.shields.io/badge/MongoDB-4.4-47A248?logo=mongodb) - ![Mongoose](https://img.shields.io/badge/Mongoose-7.4-880000?logo=mongoose) - ![Swagger UI](https://img.shields.io/badge/Swagger%20UI-5.0-85EA2D?logo=swagger) - ![Cross-env](https://img.shields.io/badge/🔀Cross--env-7.0-blue) - ![Dotenv](https://img.shields.io/badge/Dotenv-16.3-ECD53F?logo=dotenv) - ![Joi](https://img.shields.io/badge/Joi-17.9-blue) - ![JWT](https://img.shields.io/badge/JWT-9.0-yellow) - ![Bcrypt](https://img.shields.io/badge/Bcrypt-5.1-purple) - ![Cloudinary](https://img.shields.io/badge/Cloudinary-1.40-brightgreen) - ![Nanoid](https://img.shields.io/badge/Nanoid-4.0-orange) - ![CORS](https://img.shields.io/badge/CORS-2.8-indigo) - ![Express-async-handler](https://img.shields.io/badge/Express%20async%20handler-1.2-20B2AA) - ![Multer storage cloudinary](https://img.shields.io/badge/Multer%20storage%20cloudinary-4.0-red)

## API documentation

For detailed descriptions of API requests and interactions, refer to the: [`Your pet documentation`](https://your-pet-shw3.onrender.com/api-docs/)

**User's endpoints**
<img src="./public/images/user-endpoints.png" alt="Your pet API Documentation User endpoints" max-width="900" max-height="500" style="border-radius:5px">

**Notice's endpoints**
<img src="./public/images/notice-endpoints.png" alt="Your pet API Documentation Notice endpoints" max-width="900" max-height="500" style="border-radius:5px">

**Pet's endpoints**
<img src="./public/images/pet-endpoints.png" alt="Your pet API Documentation Pet endpoints" max-width="900" max-height="500" style="border-radius:5px">

**News endpoints**
<img src="./public/images/news-endpoints.png" alt="Your pet API Documentation News endpoints" max-width="900" max-height="500" style="border-radius:5px">

**Sponsor's endpoints**
<img src="./public/images/sponsor-endpoints.png" alt="Your pet API Documentation Sponsor's endpoints" max-width="900" max-height="500" style="border-radius:5px">

## Requirements

Before getting started with the project, make sure you have the following tools installed on your computer:

- `Node.js` (version 12 or higher)

## Installation

1. Clone this repository to your local computer.
2. Open the terminal and navigate to the root folder of the project.
3. Run the command `npm install` to install project dependencies.

## Configuration

1. Create a .env file in the project's root folder, based on the .env.example file.
2. Specify the necessary environment variables in this file.

## Server Commands

**npm:**

- `npm start` — Start the server in production mode.
- `npm run dev` — Start the server in development mode.
- `npm run lint` — Run code linting using eslint. Perform this before each PR and fix all linting errors.
- `npm run lint:fix` — Similar to lint command, but automatically fixes simple linting errors.
