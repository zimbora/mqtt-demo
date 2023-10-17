
module.exports = (sequelize,DataTypes)=>{
	return sequelize.define("myapp", {
		device_id: {
			type: DataTypes.INTEGER,
			unique: true,
			references: {
				model: 'devices',
				key: 'id'
			}
		},
	},
	{
		tableName: 'myapp',
		freezeTableName: true
	})
}

