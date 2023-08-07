
module.exports = (Sequelize, DataTypes) => {
    const contact_forms = Sequelize.define("contact_forms", {
        First_Name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        Last_Name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        confirm_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Zip_code: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return contact_forms
}