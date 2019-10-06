'use strict';
module.exports = (sequelize, DataTypes) => {
    var Lead = sequelize.define('Lead', {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUID4,
                allowNull: false,
                primaryKey: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            }
    });
    return Lead;
};