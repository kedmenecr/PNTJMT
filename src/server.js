import * as express from ("express")
import * as morgan from ("morgan")

const app = express();

app.use(morgan("dev"))

app.listen(3000, () => {
    console.log("[SERVER] is up and running on 3k port")
})

export { app }