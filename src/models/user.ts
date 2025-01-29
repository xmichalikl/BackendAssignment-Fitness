/* eslint import/no-cycle: 0 */

import { Sequelize, DataTypes } from 'sequelize';
import { DatabaseModel } from '@/types/db';

import { USER_ROLE } from '@/utils/enums';

export class UserModel extends DatabaseModel {
  id: number;
  name: string;
  surname: string;
  age: number;
  nickName: string;
  email: string;
  password: string;
  role: USER_ROLE;
}

export default (sequelize: Sequelize) => {
  UserModel.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      nickName: {
        type: DataTypes.STRING(200),
        unique: false,
      },
      email: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
          len: [8, 200],
        },
      },
      role: {
        type: DataTypes.ENUM(...Object.values(USER_ROLE)),
        allowNull: false,
        defaultValue: USER_ROLE.USER,
      },
    },
    {
      paranoid: true,
      timestamps: true,
      sequelize,
      modelName: 'user',
    },
  );

  return UserModel;
};
