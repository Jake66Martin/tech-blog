const User = require('./User');
const Comments = require('./Comments')

User.hasMany(Comments, {
    foreignKey: 'user_id',
  });
  
  Comments.belongsTo(User, {
    foreignKey: 'user_id',
  });


module.exports = {User, Comments}