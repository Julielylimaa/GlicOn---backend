import { Request, Response } from "express";



export async function finalCount(req: Request, res: Response){
    const { alvo, choUni, glicemia, listaAlimentos } = req.body
    let carbTotal = 0
    try{
        const aux = (glicemia - alvo)/50

        listaAlimentos.forEach((element) => {
        carbTotal+= element.qtd * element.carbs
        })

        const insulina =parseFloat(( aux + (carbTotal/choUni)).toFixed(2))
        return res.json({insulina})
    }catch(error){
        return res.status(401).json({ message: 'Não foi possível realizar a conta.' });
    }
    
}