import * as request from "supertest"
import { app } from "../../src/server"

describe("GET /articles", () => {
    it("SHOULD return 200Ok", done => {
        request(app)
            .get("/articles")
            .end((err, res) => {
                expect(res.status).toBe(200)
                done()
            })
    })

    it("SHOULD RETURN 2 aritcle when db has 2 arcilces", done => {
        const articles = [
            new Articles("ES6 the starter", 3),
            new Articles("ES6 the pro", 4)
        ];
        await db.createArticle(articles[0])
        await db.createArticle(articles[1])

        request(app)
            .get("/articles")
            .end((err, res) => {
                expect(res.body).toEqual(articles)
            })
    })



})