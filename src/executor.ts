export default async function execute(query: string, ghToken?: string) {
  return await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': (() => {
        return ghToken ? `Bearer ${ghToken}` : '';
      })()
    },
    body: JSON.stringify({ query })
  }).then(res => res.json());
}