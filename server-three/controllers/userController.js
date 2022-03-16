import users from '../models/userModel.js';

export const user_list_get = async (req, res) => {

  users.forEach(user => {
    delete user.password;
  });
  console.log(users);

  res.json(users);
};

export const user_get = async (req, res) => {
  const chosenUser = users.filter(user => {
    return req.params.id === user.id;
  });
  delete chosenUser.password;
  res.send(chosenUser);
};