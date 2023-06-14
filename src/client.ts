import Users from "./services/Users/UsersService.ts";
import execute from './executor.ts';


export default class Client {
  /** Users ghToken */
  private ghToken?: string;

  /**
   * Initialize a new GitHub client
   * @param ghToken GitHub token to use for authentication. 
   * Optional, but may lead to rate limiting and other issues. (recommended)
   */
  constructor(ghToken?: string) {
    this.ghToken = ghToken;
  }

  get users() {
    return new Users(this.ghToken);
  }

  /**
   * Run a query against the GitHub API
   */
  async execute(query: string, variables: Record<string, string>) {
    const data = await execute(query, variables, this.ghToken);

    if (!data.errors) return data.data;
    else console.error(data.errors)

  }
}