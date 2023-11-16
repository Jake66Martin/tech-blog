const User = require('./User');
const Comments = require('./Comments')
const Blog = require('./Blog')

// User.hasMany(Comments, {
//     foreignKey: 'user_id',
//   });
  
  // Comments.belongsTo(User, {
  //   foreignKey: 'user_id',
  // });


module.exports = {User, Blog, Comments}