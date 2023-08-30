# ReactJS and Spring Boot Authentication App

This repository contains a full-stack web application built using ReactJS and Spring Boot, designed to provide user authentication functionality including registration, login, and secure token-based authentication using Spring Security.

## Features

- **User Registration and Login**: Users can create an account by registering with their email and password. They can then log in securely using their registered credentials.

- **Spring Security**: The backend is secured using Spring Security, which includes features like authentication and authorization. It ensures that only authorized users can access specific endpoints.

- **Token-Based Authentication**: The application uses token-based authentication to provide a seamless and secure user experience. Upon successful login, users receive a JSON Web Token (JWT) that is sent with each subsequent request for authentication.

- **Protected Routes**: Certain routes within the React app are protected and can only be accessed by authenticated users. Unauthorized users are redirected to the login page.

## Technologies Used

### Frontend

- **ReactJS**: A JavaScript library for building user interfaces. It allows for the creation of dynamic and responsive UI components.

- **React Router**: Enables navigation and routing within the React application, making it easy to manage different views.

- **Axios**: A promise-based HTTP client for making AJAX requests. It is used to communicate with the backend API.

### Backend

- **Spring Boot**: A framework for building Java applications quickly and with minimal configuration. It simplifies the process of creating RESTful APIs.

- **Spring Security**: A powerful authentication and authorization framework for securing Java applications. It provides customizable authentication mechanisms and helps protect against common security vulnerabilities.

- **JSON Web Tokens (JWT)**: Tokens are generated upon successful login and used for subsequent authentication without the need for frequent database queries.

- **Spring Data JPA**: Simplifies database access by providing an easy-to-use API for working with relational databases.

## Getting Started

1. **Clone the Repository**: Start by cloning this repository to your local machine.

```bash
git clone https://github.com/MohamedAymanOuchker/ReactJS-SpringBoot-App.git
cd ReactJS-SpringBoot-App
```

2. **Setup Backend**: Navigate to the `backend` directory and configure your database settings in `application.properties`. Run the Spring Boot application.

```bash
cd backend
./mvnw spring-boot:run
```

3. **Setup Frontend**: Open a new terminal window and navigate to the `frontend` directory. Install dependencies and start the development server.

```bash
cd frontend
npm install
npm start
```

4. **Access the App**: Open your web browser and go to `http://localhost:8081` to access the React app.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to fit your project's specifics. Provide clear instructions for setting up and running the application, and consider adding information about API endpoints, additional features, and any other relevant details.
