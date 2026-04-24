export const getUsers = (req, res) => res.send("Get users route (Authenticated)");
export const postUsers = (req, res) => res.send("Post users route (Validated)");
export const getUserById = (req, res) => res.send(`Get user by Id route: ${req.params.userId}`);
