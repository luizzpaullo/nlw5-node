import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"

//nao criou a interface pq eh 1 regitsro

class UsersService {
    private usersRepository: Repository<User>

    constructor(){
        this.usersRepository =  getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        // 1 Verificar se o usuário existe 
        const userExists = await this.usersRepository.findOne({ email });


        // 2 Se nao existir, salvar no DB
        if(userExists){
            return userExists;
        }

        const user = this.usersRepository.create({ email});

        await this.usersRepository.save(user);


        // 3 Se existir, retornar USER
        return user;

    }



}

export { UsersService }