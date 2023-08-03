import { ITodo } from "./todo.interface";

/**
 * TodoService interface defines the contract for a service that handles ToDo-related operations.
 */
export interface ITodoService {
  /**
   * Retrieves all ToDo items.
   * @returns A promise that resolves to an array of ITodo objects.
   */
  getAllTodos(): Promise<ITodo[]>;

  /**
   * Retrieves a ToDo item by its unique identifier.
   * @param id - The unique identifier of the ToDo item to retrieve.
   * @returns A promise that resolves to a ITodo object or null if not found.
   */
  getTodoById(id: string): Promise<ITodo | null>;

  /**
   * Creates a new ToDo item.
   * @param todo - The ToDo object to be created.
   * @returns A promise that resolves to the created ITodo object.
   */
  createTodo(todo: ITodo): Promise<ITodo>;

  /**
   * Updates an existing ToDo item by its unique identifier.
   * @param id - The unique identifier of the ToDo item to update.
   * @param todo - The updated ToDo object.
   * @returns A promise that resolves to the updated ITodo object or null if not found.
   */
  updateTodo(id: string, todo: ITodo): Promise<ITodo | null>;

  /**
   * Deletes a ToDo item by its unique identifier.
   * @param id - The unique identifier of the ToDo item to delete.
   * @returns A promise that resolves to true if the ToDo item was deleted successfully, or false if not found.
   */
  deleteTodo(id: string): Promise<boolean>;
}
