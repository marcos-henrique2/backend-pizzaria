import { Response, Request } from "express";
import { CreatOrderService } from "../../services/order/CreatOrderService";

class CreatOrderController{
    async handle(req: Request, res: Response){
        const { table, name } = req.body;

        const creatOrderService = new CreatOrderService();

        const order = await creatOrderService.execute({
            table,
            name 
        });

        return res.json(order);

    }
}

export {CreatOrderController}