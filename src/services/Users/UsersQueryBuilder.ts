import * as gql from 'npm:gql-query-builder'
import RepositoryBuilder from "../../models/Repository.ts";
import { UsersQueryFields } from "../service.types.ts";

export default class UsersQueryBuilder {
  private query: gql.IQueryBuilderOptions;

  constructor(login: string) {
    this.query = {
      operation: 'user',
      variables: {
        login: { value: login, required: true }
      },
      fields: []
    }
  }

  selectFields(...fields: UsersQueryFields[]): this { 
    fields.forEach(field => {
      this.query.fields!.push(field);     
    });

    return this;
  }

  selectStars(repoFields: RepositoryBuilder, filters: { first?: number, last?: number } = {}) {
    if (!filters.first && !filters.last) {
      filters.first = 10;
    }

    if (filters.first && filters.last) {
      throw new Error('Cannot specify both first and last');
    }
    const field: gql.IQueryBuilderOptions = {
      operation: 'starredRepositories',
      variables: {
        ...(filters.first ? { first: filters.first } : { last: filters.last })
      },
      fields: [{ operation: 'nodes', fields: repoFields.fields, fragment: false }] // fragment is needed for some reason, otherwise it won't work
      
    }

    this.query.fields!.push(field);
    return this;
  }

  build() {
    const query = gql.query(this.query);
    return { query: query.query, variables: query.variables };
  }
}