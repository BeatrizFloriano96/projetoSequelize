//esse arquivo model corresponde a uma tabela no banco de dados que vou trabalhar.
//O nome do arquivo sempre tem que começar com letra maiúscula.

module.exports = (sequelize, DataTypes)=>{
    const Usuario = sequelize.define('Usuario',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataTypes.STRING,
        email: DataTypes.STRING        
    },{
        tableName: 'usuarios',
        timestamps:false
    })

    return Usuario
}
