export const getSender = (loggedUser, users) => {
  return users[0]._id === loggedUser._id
    ? users[1].firstname + " " + users[1].lastname
    : users[0].firstname + " " + users[0].lastname;
};
