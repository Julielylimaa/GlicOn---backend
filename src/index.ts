import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Food } from "./entity/Food"
import { Notes } from "./entity/Notes"


AppDataSource.initialize().then(async () => {

    const user = new User()
    const notes = new Notes()

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    user.email = "testetes@gmail.com"
    user.name = "Teste"
    user.password = "assjsiasjasi"

    
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with email: " + user.email)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    notes.descricao = "teste 1"
    notes.glicemia = 14.3
    notes.registro = "TESTE 1"
    notes.user = user

    //modificar o array
    const foodData = [
        ['Abacaxi em calda', '1 fatia média', 19],
    ['Abacaxi, polpa, congelada', '1 unidade', 8],
    ['Abacaxi, suco de com açúcar', '1 copo duplo cheio', 25],
    ['Abadejo assado', '1 filé médio', 0],
    ['Abará', '1 unidade média', 24],
    ['Abiu cru', '1 unidade', 15],
    ['Abóbora cabotian, cozida', '1 colher de sopa', 3],
    ['Abóbora Cabotian, crua', '1 colher de sopa', 4],
    ['Abóbora d’água (picada)', '1 colher de sopa cheia', 0],
    ['Abóbora doce (picada)', '1 colher de sopa cheia', 4],
    ['Abóbora moranga (picada)', '1 colher de sopa cheia', 1],
    ['Abobrinha recheada', '1 unidade', 6],
    ['Abobrinha, italiana, cozida', '1 colher de sopa', 0],
    ['Abobrinha, italiana, crua', '1 colher de sopa', 1],
    ['Abobrinha, paulista, crua', '1 colher de sopa', 2],
    ['Abricó-do-pará', '1 fatia média', 13],
    ['Açafrão em pó', '1 colher de sopa cheia', 12],
    ['Açaí (polpa da fruta natural)', '1 copo pequeno', 55],
    ['Açaí (polpa) com xarope de guaraná e glicose', '1 taça pequena', 21],
    ['Açaí com farinha de mandioca', '1 copo pequeno', 85],
    ['Açaí com farinha de tapioca', '1 copo pequeno', 85],
    ['Açaí natural Frooty ®', '1 bola', 13],
    ['Açaí natural Frooty zero ®', '1 bola', 10],
    ['Açaí polpa congelada', '1 unidade', 6],
    ['Açaí, suco de', '1 copo duplo cheio', 72],
    ['Acarajé', '1 unidade média', 22],
    ['Acelga (picada)', '1 colher de sopa cheia', 0],
    ['Acém magro cozido', '1 pedaço médio', 0],
    ['Acerola', '1 unidade', 1],
    ['Achocolatado Diet Gold ®', '1 colher de sopa', 6],
    ['Achocolatado Diet Linea ®', '1 colher de sopa', 5],
    ['Achocolatado light Nescau ®', '1 colher de sopa', 8],
    ['Achocolatado light Toddy ®', '1 colher de sopa', 8],
    ['Achocolatado tradicional Nescau ®', '1 colher de sopa', 9],
    ['Achocolatado tradicional Toddy ®', '1 colher de sopa', 9],
    ['Açúcar branco refinado', '1 colher de sopa cheia', 30],
    ['Açúcar cristal', '1 colher de sopa cheia', 24],
    ['Açúcar de coco', '1 colher de chá', 5],
    ['Açúcar mascavo', '1 colher de sopa cheia', 17],
    ['Agrião (picado)', '1 colher de sopa cheia', 0],
    ['Agrião refogado', '1 colher de sopa cheia', 1],
    ['Água de coco industrializada Sococo ®', '1 copo', 11],
    ['Água tônica Antarctica ®', '1 lata', 17],
    ['Água tônica zero Antarctica ®', '1 lata', 0],
    ['Água-de-coco verde', '1 copo', 11],
    ['Aipim cozido (macaxeira ou mandioca)', 'pedaço grande', 30],
    ['Aipim frito (macaxeira ou mandioca)', 'pedaço grande', 50],
    ['Aipo inteiro (picado)', '1 colher de sopa cheia', 0],
    ['Alcachofra', '1 pedaço médio', 1],
    ['Alcaparra', '1 colher de sopa cheia', 1],
    ['Alface, americana, crua', '1 folha média', 0],
    ['Alface, crespa, crua', '1 folha média', 0]
    ];

    


    foodData.map(async item => {
        let food = new Food()
        food.name = String(item[0])
        food.usualMeasure = String(item[1])
        food.carbs = Number(item[2])
        
        return await AppDataSource.manager.save(food);
    });

  
}).catch(error => console.log(error))
