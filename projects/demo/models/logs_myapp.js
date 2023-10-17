
module.exports = (sequelize,DataTypes)=>{
	return sequelize.define("logs_myapp", {
		device_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'devices',
				key: 'id'
			}
		}
	},
	{
		tableName: 'logs_myapp',
		freezeTableName: true
	})
}

