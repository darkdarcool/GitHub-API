import Client from './client.ts';

export { default as Client } from './client.ts'

if (import.meta.main) {

  const client = new Client('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');

  let query = client.users.getUserByUsername('darkdarcool').selectFields('bio', 'createdAt').build();

  console.log(query);

  let res = await client.execute(query);

  console.log(res);

}