import { Router } from "express"
import { CreateCategoryController } from "./controllers/CreateCategoryController"
import { CreateVideoController } from "./controllers/CreateVideoController"
import { DeleteCategoryController } from "./controllers/DeleteCategoryController"
import { DeleteVideoController } from "./controllers/DeleteVideoController"
import { GetAllCategoryController } from "./controllers/GetAllCategoryController"
import { GetAllVideoController } from "./controllers/GetAllVideoController"
import { UpdateCategoryController } from "./controllers/UpdateCategoryController"
import { UpdateVideoController } from "./controllers/UpdateVideoController"

const routes = Router()

/**
 * C - Create
 * R - Read
 * U - Update
 * D - Delete
*/


routes.post("/categories", new CreateCategoryController().handler)
routes.get("/categories", new GetAllCategoryController().handler)
routes.delete("/categories/:id", new DeleteCategoryController().handler)
routes.put("/categories/:id", new UpdateCategoryController().handler)

routes.post("/videos", new CreateVideoController().handler)
routes.get("/videos", new GetAllVideoController().handler)
routes.delete("/videos/:id", new DeleteVideoController().handler)
routes.put("/videos/:id", new UpdateVideoController().handler)


export {routes}