const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'producto',
    {
        id_producto:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre : {
            type: Sequelize.STRING
        },
        descripcion : {
            type: Sequelize.STRING
        },
        precio : {
            type: Sequelize.INTEGER
        },
        stock : {
            type: Sequelize.INTEGER
        },
        num_reposicion : {
            type: Sequelize.INTEGER
        },
        fecha_ingreso : {
            type: Sequelize.INTEGER
        },
        nombre : {
            type: Sequelize.STRING
        },
        imagen : {
            type: Sequelize.STRING
        },
        id_categoria : {
            type: Sequelize.INTEGER
        },
        id_marca : {
            type: Sequelize.INTEGER
        }
        
        

        
    },
    {
        timestamps: false
    }

)