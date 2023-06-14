
import { Maybe, Repository, Scalars, type User } from '../schema.ts';

export type KeysOfType<T, V> = keyof {
  // deno-lint-ignore no-explicit-any
  [P in keyof T as T[P] extends V? P: never]: any
}

export type UserObjects = 'starredRepositories';

export type UsersQueryFields = KeysOfType<User, string | number | Date | Scalars | Maybe<Scalars["Int"]> |  Maybe<Scalars["String"]> |  Maybe<Scalars["Date"]> |  Maybe<Scalars["Boolean"]>> | UserObjects;


export type RepositoryFields = KeysOfType<Repository, string | number | Date | Scalars | Maybe<Scalars["Int"]> |  Maybe<Scalars["String"]> |  Maybe<Scalars["Date"]> |  Maybe<Scalars["Boolean"]>> | UserObjects;