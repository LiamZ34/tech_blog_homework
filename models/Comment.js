const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        body: DataTypes.STRING,
        allowNull: false,
    },
    {
        sequelize,
        modelName: 'comment',
    }
);

module.exports = Comment;
