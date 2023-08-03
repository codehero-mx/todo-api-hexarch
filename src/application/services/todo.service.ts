import { ITodo } from "../interfaces/todo.interface";
import { TodoEntity } from "../../domain/entities/todo.entity";
import { ITodoRepository } from "../../domain/repositories/todo.repository";
import { ITodoService } from "../interfaces/todo-service.interface";

/**
 * TodoService class provides methods to manage ToDo items using the ITodoRepository.
 */
export class TodoService implements ITodoService {
  /**
   * Creates an instance of TodoService.
   * @param todoRepository - The ITodoRepository instance to be used for data access.
   */
  constructor(private readonly todoRepository: ITodoRepository) { }

  /**
   * Retrieves all ToDo items.
   * @returns A promise that resolves to an array of ITodo objects.
   */
  async getAllTodos(): Promise<ITodo[]> {
    const todos = await this.todoRepository.getAll();
    return todos.map((todo) => this.mapToTodoDto(todo));
  }

  /**
   * Retrieves a ToDo item by its unique identifier.
   * @param id - The unique identifier of the ToDo item to retrieve.
   * @returns A promise that resolves to a ITodo object or null if not found.
   */
  async getTodoById(id: string): Promise<ITodo | null> {
    const todo = await this.todoRepository.getById(id);
    return todo ? this.mapToTodoDto(todo) : null;
  }

  /**
   * Creates a new ToDo item.
   * @param todo - The ToDo object to be created.
   * @returns A promise that resolves to the created ITodo object.
   */
  async createTodo(todo: ITodo): Promise<ITodo> {
    const createdTodo = await this.todoRepository.create(this.mapToTodoEntity(todo));
    return this.mapToTodoDto(createdTodo);
  }

  /**
   * Updates an existing ToDo item by its unique identifier.
   * @param id - The unique identifier of the ToDo item to update.
   * @param todo - The updated ToDo object.
   * @returns A promise that resolves to the updated ITodo object or null if not found.
   */
  async updateTodo(id: string, todo: ITodo): Promise<ITodo | null> {
    const existingTodo = await this.todoRepository.getById(id);
    if (!existingTodo) return null;

    const updatedTodo = await this.todoRepository.update(this.mapToTodoEntity({ ...existingTodo, ...todo }));
    return updatedTodo ? this.mapToTodoDto(updatedTodo) : null;
  }

  /**
   * Deletes a ToDo item by its unique identifier.
   * @param id - The unique identifier of the ToDo item to delete.
   * @returns A promise that resolves to true if the ToDo item was deleted successfully, or false if not found.
   */
  async deleteTodo(id: string): Promise<boolean> {
    return this.todoRepository.delete(id);
  }

  /**
   * Maps a TodoEntity object to a ITodo object (TodoDto).
   * @param todo - The TodoEntity object to be mapped.
   * @returns The mapped ITodo object (TodoDto).
   */
  private mapToTodoDto(todo: TodoEntity): ITodo {
    return {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      isCompleted: todo.isCompleted,
    };
  }

  /**
   * Maps a ITodo object (TodoDto) to a TodoEntity object.
   * @param todo - The ITodo object (TodoDto) to be mapped.
   * @returns The mapped TodoEntity object.
   */
  private mapToTodoEntity(todo: ITodo): TodoEntity {
    return new TodoEntity(todo.id, todo.title, todo.description || "", todo.isCompleted);
  }
}
