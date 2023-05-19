import { Request, Response } from "express";
import { ListCadegoryService } from "../../services/category/ListCategoryService";

class ListCadegoryController {
    async handle(req: Request, res: Response){
        const listCategoryService = new ListCadegoryService();

        const category = await listCategoryService.execute();

        return res.json(category);
    }
}

export {ListCadegoryController}