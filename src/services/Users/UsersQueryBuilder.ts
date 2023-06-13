import { GraphqlQuery } from 'npm:gql-query';

type UsersQueryFields = 'id' | 'name' | 'email' | 'password' | 'createdAt' | 'updatedAt' | 'bio';
type UserObjects = 'starredRepositories';


export default class UsersQueryBuilder {
  private login: string;
  private query: {
    [key in UsersQueryFields]?: boolean;
  } = {};

  private queryStart: string;

  constructor(login: string) {
    this.login = login;

    this.queryStart = `query { user(login: "${this.login}") `;
  }

  selectFields(...fields: UsersQueryFields[]): this { 
    fields.forEach(field => {
      this.query[field] = true;
    });

    return this;
  }


  build() {
    return this.queryStart + GraphqlQuery(this.query) + '}';
  }
}