"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            username: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });

        await queryInterface.createTable("images", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            src: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });

        await queryInterface.createTable(
            "caption",
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                user_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    references: {
                        model: {
                            tableName: "users",
                            schema: "public",
                        },
                        key: "id",
                    },
                },
                image_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    references: {
                        model: {
                            tableName: "images",
                            schema: "public",
                        },
                        key: "id",
                    },
                },
                created_at: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updated_at: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
            },
            {
                indexes: [
                    {
                        unique: true,
                        fields: ["user_id", "image_id"],
                    },
                ],
            }
        );
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropAllTables();
    },
};
