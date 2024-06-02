import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Food } from "./entity/Food"


AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.email = "testetes@gmail.com"
    // user.name = "Teste"
    // user.password = "assjsiasjasi"
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with email: " + user.email)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)


    //modificar o array
    // const foodData = [
    // ];

    


    // foodData.map(async item => {
    //     let food = new Food()
    //     food.name = String(item[0])
    //     food.usualMeasure = String(item[1])
    //     food.carbs = Number(item[2])
        
    //     return await AppDataSource.manager.save(food);
    // });

  
}).catch(error => console.log(error))
