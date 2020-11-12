const connectstring ="mongodb+srv://db_admin:OiZtN3u8WVFPNfne@weatherbabe.d5kn0.mongodb.net/weather?retryWrites=true&w=majority";
const monk = require("monk")(connectstring);
const weatherlogins = monk.get("logins");

exports.newuser = (username, password) => {
  weatherlogins
    .insert({ username: username, password: password })
    .catch((err)=>{console.log(err);})
    .then(() => monk.close());
};

exports.searchuser = (index) => {
  weatherlogins
    .find({ username: index })
    .then((res) => {
      return(res);
      monk.close();
    })
    .catch((err) => {
      console.log(err);
    });
};


