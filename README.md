# <img src = "./logo.svg" align = "center" width = 50/> Deno Github API Wrapper

> Simple wrapper of the GitHub (graphql) API for [Deno 🦕](https://deno.com/)

## Simple Example (proposed interface, prone to change)

```typescript
let user = 'supercoolgithubuser';

const client = new Client('yourGithubToken');

let query = client.users.
  getUserByUsername(user)
    .selectFields('bio', 'createdAt')
    .build();

let data = client.execute(query);

console.log(data);
```

## Features

- 📖 Readability
- 🔒 Type safety
- 🤖 Easy to use
- 🧩 Extensible

## Permissions

The only permission required to use this library is `--allow-net` if you run the `execute` method. The library will function as a query builder without it

## Author(s)

* [**@darkdarcool**](https://github.com/darkdarcool)