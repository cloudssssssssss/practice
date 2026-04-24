export const getArticles = (req, res) => res.send("Get articles route (Access Checked)");
export const getArticleById = (req, res) => res.send(`Get article by Id route: ${req.params.articleId}`);
