export const getArticles = (req, res) => {
    res.render("articles.ejs");
};
export const getArticleById = (req, res) => {
    res.render("article.ejs", { id: req.params.articleId });
};
