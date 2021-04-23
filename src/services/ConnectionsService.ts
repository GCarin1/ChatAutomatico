import { getCustomRepository, Repository } from 'typeorm';
import { Connection } from '../entities/Connection';
import { Setting } from '../entities/Setting';
import { User } from '../entities/User';
import { ConnectionsRepository } from '../repositories/ConnectionsRepository';

interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

class ConnectionsService {
  private connectionsRepository: Repository<Connection>;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
    const connection = this.connectionsRepository.create({
      socket_id,
      user_id,
      admin_id,
      id
    });

    await this.connectionsRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {
    const connection = await this.connectionsRepository.findOne({
      user_id
    });

    return connection
  }
  async findAllWithoutAdmin(){
    const connections = await this.connectionsRepository.find({
      where:{admin_id:null},
      relations:["User"],
    });
    return connections;
  }
  async findBySocketID(socket_id:string){
    const connection = await this.connectionsRepository.findOne({
      socket_id,
    });
    return connection;
  }
  async updateAdminID(user_id:string,admin_id:string){
    await this.connectionsRepository
    .createQueryBuilder()
    .update(Connection)
    .set({user_id})
    .where("user_id=:user_id",{
      user_id,
    })
    .execute();
  }
}

export { ConnectionsService };