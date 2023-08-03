/**
 * Todo interface represents a ToDo entity.
 * It defines the properties that describe a ToDo item.
 */
export interface ITodo {
  /**
   * The unique identifier of the ToDo item.
   */
  id: string;

  /**
   * The title or name of the ToDo item.
   */
  title: string;

  /**
   * An optional description of the ToDo item.
   */
  description?: string;

  /**
   * Indicates whether the ToDo item is completed or not.
   */
  isCompleted: boolean;
}
