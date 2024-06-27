import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Food } from "../../entity/Food";
import { ILike } from "typeorm";


export async function foodList(req: Request, res: Response){
    const search = req.query.search
    let filters: any = {}
    if (search) {
        filters = {
            where: { name: ILike(`${search}%`) }
        }
    }
    const foodRepository = AppDataSource.getRepository(Food)
   

    const food = await foodRepository.find({...filters})
    
    res.json(food)
    
}

