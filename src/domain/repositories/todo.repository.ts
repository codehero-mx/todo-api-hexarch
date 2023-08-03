import { TodoEntity } from "../entities/todo.entity";

/**
 * ITodoRepository interface defines the contract for a repository that handles ToDo-related operations.
 */
export interface ITodoRepository {
  /**
   * Retrieves all ToDo items.
   * @returns A promise that resolves to an array of TodoEntity objects.
   */
  getAll(): Promise<TodoEntity[]>;

  /**
   * Retrieves a ToDo item by its unique identifier.
   * @param id - The unique identifier of the ToDo item to retrieve.
   * @returns A promise that resolves to a TodoEntity object or null if not found.
   */
  getById(id: string): Promise<TodoEntity | null>;

  /**
   * Creates a new ToDo item.
   * @param todo - The TodoEntity object to be created.
   * @returns A promise that resolves to the created TodoEntity object.
   */
  create(todo: TodoEntity): Promise<TodoEntity>;

  /**
   * Updates an existing ToDo item.
   * @param todo - The updated TodoEntity object.
   * @returns A promise that resolves to the updated TodoEntity object or null if not found.
   */
  update(todo: TodoEntity): Promise<TodoEntity | null>;

  /**
   * Deletes a ToDo item by its unique identifier.
   * @param id - The unique identifier of the ToDo item to delete.
   * @returns A promise that resolves to true if the ToDo item was deleted successfully, or false if not found.
   */
  delete(id: string): Promise<boolean>;
}
