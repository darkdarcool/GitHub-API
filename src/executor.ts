export default async function execute(query: string, variables: Record<string, string>, ghToken?: string) {
  return await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': (() => {
        return ghToken ? `Bearer ${ghToken}` : '';
      })(),
      'X-Github-Next-Global-ID': '1' // use new github id system
    },
    body: JSON.stringify({ query, variables })
  }).then(res => res.json());

}