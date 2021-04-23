import {  Entity, PrimaryColumn, CreateDateColumn, Column,
             ManyToOne,
             JoinColumn,
         } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text: string;

    // @Column() so assim o banco de dados gerencia o relacionamento mas nao fica claro no codigo que existe esse relacionamento

    // criar relacionamento no codigo para
    @JoinColumn({name: "user_id"})
    @ManyToOne(()=>User)
    user: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Message };