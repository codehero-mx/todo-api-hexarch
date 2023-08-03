# ToDo Application

This is a simple ToDo application built with TypeScript and Express.js, following the Hexagonal Architecture design pattern. The application allows users to manage their ToDo items, including creating, reading, updating, and deleting tasks.

## Prerequisites

Before running the application, make sure you have the following installed on your system:

- Node.js (version 14 or higher)
- npm (Node Package Manager) or yarn

## Getting Started

1. Clone the repository to your local machine:

```bash
$ git clone https://github.com/your-username/todo-application.git
```

2. Navigate to the project directory:

```bash
$ cd todo-application
```

3. Install the dependencies:

```bash
$ npm install

# or

$ yarn install
```

4. Set up environment variables:

Create a `.env` file in the root directory and provide the necessary configuration for the database connection. You can use the provided `.env.example` as a template.

```bash
DB_DRIVER=inmemory # inmemory or sequelize.Dialect
DB_HOST=localhost
DB_USER=root
DB_PASS=secret
DB_NAME=database
```

Start the server:

```bash
$ npm start

# or

$ yarn start
```

The server should now be running at `http://localhost:3000`.

## Endpoints

The following API endpoints are available:

- `GET /api/todos`: Get all ToDo items.
- `GET /api/todos/:id`: Get a ToDo item by ID.
- `POST /api/todos`: Create a new ToDo item.
- `PUT /api/todos/:id`: Update an existing ToDo item by ID.
- `DELETE /api/todos/:id`: Delete a ToDo item by ID.

## Architecture

The application follows the Hexagonal Architecture (Ports and Adapters) design pattern, separating the core application logic from the infrastructure details. The main components are:

- **Application Layer:** Contains the application services that handle business logic. It depends on the domain layer but is independent of the infrastructure layer.

- **Domain Layer:** Contains the domain entities, repositories, and domain services. It represents the core business logic of the application.

- **Infrastructure Layer:** Contains the implementations of repositories and other infrastructure-related components. It depends on both the domain and application layers.

## Contributing

Contributions to the project are welcome! If you find any issues or want to suggest improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
