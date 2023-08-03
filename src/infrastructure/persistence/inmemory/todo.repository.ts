import { TodoEntity } from "../../../domain/entities/todo.entity";
import { ITodoRepository } from "../../../domain/repositories/todo.repository";

/**
 * InMemoryTodoRepository class provides a concrete implementation of the ITodoRepository interface
 * for storing ToDo items in memory.
 */
export class InMemoryTodoRepository implements ITodoRepository {
    private todos: TodoEntity[] = [];

    /**
     * Retrieves all ToDo items from the in-memory storage.
     * @returns A promise that resolves to an array of TodoEntity objects.
     */
    async getAll(): Promise<TodoEntity[]> {
        return this.todos;
    }

    /**
     * Retrieves a ToDo item by its unique identifier from the in-memory storage.
     * @param id - The unique identifier of the ToDo item to retrieve.
     * @returns A promise that resolves to a TodoEntity object or null if not found.
     */
    async getById(id: string): Promise<TodoEntity | null> {
        return this.todos.find((todo) => todo.id.toString() === id.toString()) || null;
    }

    /**
     * Creates a new ToDo item and stores it in the in-memory storage.
     * @param todo - The TodoEntity object to be created.
     * @returns A promise that resolves to the created TodoEntity object.
     */
    async create(todo: TodoEntity): Promise<TodoEntity> {
        this.todos.push(todo);
        return todo;
    }

    /**
     * Updates an existing ToDo item in the in-memory storage.
     * @param todo - The updated TodoEntity object.
     * @returns A promise that resolves to the updated TodoEntity object or null if not found.
     */
    async update(todo: TodoEntity): Promise<TodoEntity | null> {
        const index = this.todos.findIndex((t) => t.id === todo.id);
        if (index === -1) return null;

        this.todos[index] = todo;
        return todo;
    }

    /**
     * Deletes a ToDo item by its unique identifier from the in-memory storage.
     * @param id - The unique identifier of the ToDo item to delete.
     * @returns A promise that resolves to true if the ToDo item was deleted successfully, or false if not found.
     */
    async delete(id: string): Promise<boolean> {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter((todo) => todo.id !== id);
        return this.todos.length < initialLength;
    }
}
