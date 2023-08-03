import { TodoEntity } from "../../../domain/entities/todo.entity";
import { ITodoRepository } from "../../../domain/repositories/todo.repository";
import { TodoModel } from "../../database//sequelize/todo.model";

/**
 * SequelizeTodoRepository class provides a concrete implementation of the ITodoRepository interface
 * using Sequelize ORM to interact with the database.
 */
export class SequelizeTodoRepository implements ITodoRepository {
  /**
   * Creates an instance of SequelizeTodoRepository.
   * This class is responsible for handling ToDo-related operations using the Sequelize TodoModel.
   */
  constructor() { }

  /**
   * Retrieves all ToDo items from the database using the TodoModel.
   * @returns A promise that resolves to an array of TodoEntity objects.
   */
  async getAll(): Promise<TodoEntity[]> {
    const todos = await TodoModel.findAll();
    return todos.map((todo) => todo.toJSON() as TodoEntity);
  }

  /**
   * Retrieves a ToDo item by its unique identifier from the database using the TodoModel.
   * @param id - The unique identifier of the ToDo item to retrieve.
   * @returns A promise that resolves to a TodoEntity object or null if not found.
   */
  async getById(id: string): Promise<TodoEntity | null> {
    const todo = await TodoModel.findByPk(id);
    return todo ? (todo.toJSON() as TodoEntity) : null;
  }

  /**
   * Creates a new ToDo item and stores it in the database using the TodoModel.
   * @param todo - The TodoEntity object to be created.
   * @returns A promise that resolves to the created TodoEntity object.
   */
  async create(todo: TodoEntity): Promise<TodoEntity> {
    const createdTodo = await TodoModel.create({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      isCompleted: todo.isCompleted,
    });

    return createdTodo.toJSON() as TodoEntity;
  }

  /**
   * Updates an existing ToDo item in the database using the TodoModel.
   * @param todo - The updated TodoEntity object.
   * @returns A promise that resolves to the updated TodoEntity object or null if not found.
   */
  async update(todo: TodoEntity): Promise<TodoEntity | null> {
    const [rowsAffected, updatedTodo] = await TodoModel.update(todo, {
      where: { id: todo.id },
      returning: true,
    });

    return rowsAffected > 0 ? (updatedTodo[0].toJSON() as TodoEntity) : null;
  }

  /**
   * Deletes a ToDo item by its unique identifier from the database using the TodoModel.
   * @param id - The unique identifier of the ToDo item to delete.
   * @returns A promise that resolves to true if the ToDo item was deleted successfully, or false if not found.
   */
  async delete(id: string): Promise<boolean> {
    const rowsAffected = await TodoModel.destroy({ where: { id } });
    return rowsAffected > 0;
  }
}
