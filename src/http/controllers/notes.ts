import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";
import { Notes } from "../../entity/Notes";



export async function addNotes(req: Request, res: Response) {
    const { registro, descricao, glicemia, horario } = req.body
    const { id } = req.user
    

    const notesRepository = AppDataSource.getRepository(Notes)
    
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({ id })

    const note = new Notes()
    note.registro = registro
    note.descricao = descricao
    note.glicemia = glicemia
    note.horario = horario
    note.user = user

    await notesRepository.manager.save(note)
    res.status(201).json({ message: 'Anotação cadastrada com sucesso'})
} 

export async function notes(req: Request, res: Response) {
    const { id } = req.user
    const notesRepository = AppDataSource.getRepository(Notes)
    const notesUser = await notesRepository.find({
        relations: {
            user: true,
        },
        where: {
            user: {
                id : id
            },
        },
    })

    let notes = []
    
    notesUser.forEach((element)=>{
        const { user:_ , ...note} = element
        notes.push(note)
    })
    

    return res.json(notes)
} 

/*
{
	"registro": "teste1",
	"descricao": "descricao teste1",
	"glicemia": 108.4,
	"horario": "10:29"
}
*/