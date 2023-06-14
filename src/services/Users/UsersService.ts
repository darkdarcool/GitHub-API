import Service from "../service.ts";
import UsersQueryBuilder from "./UsersQueryBuilder.ts";

export default class Users extends Service {

  constructor(ghToken?: string) {
    super(ghToken);
  }
  /**
   * Get a user by their username
   * @param login Username of the user to get
   */
  getUserByUsername(login: string) {
    return new UsersQueryBuilder(login);
  }

  

}