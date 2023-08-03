import { DataTypes, Model } from "sequelize";
import { sequelize } from "./instance";

/**
 * TodoModel class represents the Sequelize model for the ToDo entity.
 * It defines the structure of the table and its columns in the database.
 */
export class TodoModel extends Model { }

// Initialize the TodoModel with the table structure and column definitions.
TodoModel.init(
  {
    /**
     * The unique identifier of the ToDo item.
     */
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    /**
     * The title or name of the ToDo item.
     */
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    /**
     * An optional description of the ToDo item.
     */
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    /**
     * Indicates whether the ToDo item is completed or not.
     */
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    // Pass the Sequelize instance to link the model with the database connection.
    sequelize,

    // Define the model name to be used in the database table.
    modelName: "Todo",
  }
);
