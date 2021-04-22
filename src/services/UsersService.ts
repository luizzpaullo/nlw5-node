import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

//nao criou a interface pq eh 1 regitsro

class UsersService {
    async create(email: string) {
        const userRepository = getCustomRepository(UsersRepository)

        // 1 Verificar se o usuário existe 
        const userExists = await userRepository.findOne({ email });


        // 2 Se nao existir, salvar no DB
        if(userExists){
            return userExists;
        }

        const user = userRepository.create({ email});

        await userRepository.save(user);


        // 3 Se existir, retornar USER
        return user;

    }



}

export { UsersService }