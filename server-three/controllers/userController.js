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
  delete chosenUser[0].password;
  res.send(chosenUser);
};

export const user_post = async (req, res) => {
  console.log(req.body);
  res.send(req.body);
};