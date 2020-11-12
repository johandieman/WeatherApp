const connectstring =
  "mongodb+srv://db_admin:OiZtN3u8WVFPNfne@weatherbabe.d5kn0.mongodb.net/weather?retryWrites=true&w=majority";
const monk = require("monk")(connectstring);
const weatherlogins = monk.get("logins");

exports.newuser = (username, password) => {
  weatherlogins
    .insert({ username: username, password: password })
    .catch((err)=>{console.log(err);})
    .then(() => db.close());
};

exports.searchuser = (index) => {
  weatherlogins
    .find({ username: index })
    .then((res) => {
      const obj = JSON.parse(res);
      console.log(obj);
    })
    .catch((err) => {
      if (err) throw err;
    });
};

monk.close();
