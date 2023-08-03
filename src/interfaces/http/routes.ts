import express, { Request, Response } from "express";
import { TodoService } from "../../application/services/todo.service";

/**
 * Creates and returns the Express router with routes for the ToDo API.
 * @param todoService - The TodoService instance used to handle ToDo-related operations.
 * @returns The Express router with defined ToDo routes.
 */
export function createTodoRoutes(todoService: TodoService) {
  const router = express.Router();

  // Get all ToDos
  router.get("/todos", async (_req: Request, res: Response) => {
    try {
      const todos = await todoService.getAllTodos();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Get a ToDo by ID
  router.get("/todos/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const todo = await todoService.getTodoById(id);
      if (!todo) {
        res.status(404).json({ error: "ToDo not found" });
      } else {
        res.json(todo);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Create a new ToDo
  router.post("/todos", async (req: Request, res: Response) => {
    const todo = req.body;
    try {
      const createdTodo = await todoService.createTodo(todo);
      res.status(201).json(createdTodo);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Update an existing ToDo
  router.put("/todos/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const todo = req.body;
    try {
      const updatedTodo = await todoService.updateTodo(id, todo);
      if (!updatedTodo) {
        res.status(404).json({ error: "ToDo not found" });
      } else {
        res.json(updatedTodo);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Delete a ToDo by ID
  router.delete("/todos/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deleted = await todoService.deleteTodo(id);
      if (!deleted) {
        res.status(404).json({ error: "ToDo not found" });
      } else {
        res.sendStatus(204);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
}
