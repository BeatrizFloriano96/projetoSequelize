module.exports = (sequelize, DataTypes)=>{
    const Servicos = sequelize.define('Servicos',{
        id_servicos:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tipo: DataTypes.STRING,
        preco: DataTypes.FLOAT
                
    },{
        tableName: 'servicos',
        timestamps:false
    })

    return Servicos
}