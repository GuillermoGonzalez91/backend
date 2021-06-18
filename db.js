const Sequelize = require ('sequelize');

const BlogModel = require ('./models/blog');

const sequelize = new Sequelize ('OyX8LVy05j','OyX8LVy05j','6yvhmVZnDo',{
        host : 'remotemysql.com',
        dialect: 'mysql'
})

const Blog = BlogModel(sequelize,Sequelize);

sequelize.sync({force:false})
.then(() => {
    console.log('tablas sincronizadas')
})
.catch((error) => console.error(error));

module.exports = {
    Blog
}