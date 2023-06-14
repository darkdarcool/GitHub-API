// deno-lint-ignore no-unused-vars
import Client from './client.ts';
import RepositoryBuilder from './models/Repository.ts';
export * from './schema.ts';

export { default as Client } from './client.ts'
export {
  RepositoryBuilder,

}

if (import.meta.main) {
  /*
  const client = new Client(Deno.env.get('GH_TOKEN'));

  let query = client.users
  .getUserByUsername('darkdarcool')
    .selectFields('id')
    .selectStars(
      new RepositoryBuilder()
        .select('id', 'updatedAt'),
      { last: 10 }
    )
    .build();
    */


 // let data = await client.execute(query.query, query.variables);

 // console.log(data);

  // create type from schema
  
}