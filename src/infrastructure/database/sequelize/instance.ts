import { Dialect, Options, Sequelize } from "sequelize";

/**
 * An object that defines the available database dialects and their corresponding Sequelize configuration.
 * Each dialect is represented as an object with a 'dialect' property.
 */
const dialects: { [key: string]: any } = {
  mysql: {
    dialect: 'mysql',
  },
  postgres: {
    dialect: 'postgres',
  },
  sqlite: {
    dialect: 'sqlite',
  },
  mssql: {
    dialect: 'mssql',
  },
  mariadb: {
    dialect: 'mariadb',
  },
};

/**
 * Get the selected database dialect from the environment variable DB_DRIVER and convert it to lowercase.
 * If the selected dialect is not valid or missing, throw an error.
 */
const selectedDialect = process.env.DB_DRIVER?.toLowerCase();
if (!selectedDialect || !(selectedDialect in dialects)) {
  throw new Error('Invalid or missing DB_DRIVER in .env file');
}

/**
 * Create the options object for the Sequelize instance using the selected dialect's configuration.
 * The options object includes the 'host' and other properties specific to the selected dialect.
 */
const options: Options = {
  host: process.env.DB_HOST as string,
  ...dialects[selectedDialect],
};

/**
 * Create and export the Sequelize instance with the specified database credentials and options.
 */
export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  options
);
