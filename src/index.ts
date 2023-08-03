// Load environment variables from the .env file
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import { createTodoRoutes } from "./interfaces/http/routes";
import { TodoService } from "./application/services/todo.service";
// import { SequelizeTodoRepository as TodoRepository } from "./infrastructure/persistence/sequelize/todo.repository";
import { InMemoryTodoRepository as TodoRepository } from "./infrastructure/persistence/inmemory/todo.repository";

const app = express();

// Dependency Injection for Infrastructure Layer
const todoRepository = new TodoRepository();

// Dependency Injection for Application Layer
const todoService = new TodoService(todoRepository);

app.use(bodyParser.json());

// Routes
app.use("/api", createTodoRoutes(todoService));

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
