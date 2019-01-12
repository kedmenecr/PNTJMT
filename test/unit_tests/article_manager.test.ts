import { ArticleManager } from "../../src/managers/article_manager"
import { Article } from "../../src/models/article"

test("getArticles_oneArticleInDB_ListOfOneArticle", async () => {
    const articleManager = new ArticleManager()
    const articles: Article[] = await articleManager.getArticles()
    expect(articles.length).toBe(0)
})