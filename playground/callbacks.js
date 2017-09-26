var getUser = (id, callback) => {
  var user = {
    id: 2,
    name: 'Michael'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(2, (user) => {
  console.log(user);
});
