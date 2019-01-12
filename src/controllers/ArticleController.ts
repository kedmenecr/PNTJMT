import { Response, Request } from "express"
import { ArticleManager } from "../managers/article_manager"

class ArticleController {

    private articleManager: ArticleManager

    constructor() {
        this.articleManager = new ArticleManager()
    }
    index = async (req: Request, res: Response) => {

        const articles = await this.articleManager.getArticles()
        res.json(articles)
    }

}

export default new ArticleController();