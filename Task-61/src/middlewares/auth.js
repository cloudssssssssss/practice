export const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).send('Authentication required: No token provided (Use Postman to add Authorization header)');
    }
    next();
};

export const checkArticleAccess = (req, res, next) => {
    console.log('Checking article permissions...');
    next();
};
