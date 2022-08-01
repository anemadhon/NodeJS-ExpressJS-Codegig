module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Gig', {
        title: DataTypes.STRING,
        technologies: DataTypes.STRING,
        budget: DataTypes.STRING,
        description: DataTypes.TEXT,
        email: DataTypes.STRING
    }, {
        tableName: 'Gigs'
    })
}