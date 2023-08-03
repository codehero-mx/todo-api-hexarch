/**
 * TodoEntity class represents a ToDo entity.
 * It defines the properties that describe a ToDo item.
 */
export class TodoEntity {
  /**
   * Creates an instance of TodoEntity.
   * @param id - The unique identifier of the ToDo item.
   * @param title - The title or name of the ToDo item.
   * @param description - An optional description of the ToDo item.
   * @param isCompleted - Indicates whether the ToDo item is completed or not.
   */
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public isCompleted: boolean
  ) { }
}
