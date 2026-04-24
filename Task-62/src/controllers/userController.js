export const getUsers = (req, res) => {
    res.render("users.pug");
};
export const getUserById = (req, res) => {
    res.render("user.pug", { id: req.params.userId });
};
