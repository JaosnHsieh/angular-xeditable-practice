// Example model


module.exports = function (sequelize, DataTypes) {

  var Paper = sequelize.define('Paper', {
    fromtext: DataTypes.STRING, // 來文內容
    fromnumber: DataTypes.STRING,
    totext: DataTypes.STRING,
    tonumber: DataTypes.STRING,
    summary: DataTypes.STRING, //
  }, {
    // fields: ['title', {attribute: 'title', collate: 'en_US', order: 'DESC', length: 5}],
    // timestamps: false,
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Paper;
};
