const bcrypt = require('bcrypt');

const hashingPassword = (password, cb) => {
  console.log(password);
  console.log('hashingPassword');
  return bcrypt.hash(password, 10, (error, hash) => {
    if(error){
      cb(error);
      console.log('ERROR' , error);
    } else {
      console.log('hash password:', hash);
       cb(null, hash);
    }
  })
};

module.exports = hashingPassword;
