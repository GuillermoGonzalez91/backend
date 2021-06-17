module.exports = (sequelize, type) => {
    return sequelize.define('blog', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        content: type.STRING,
        image: type.STRING,
        id_category: type.INTEGER, 
        creation_date: type.DATE
    })
}