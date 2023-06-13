export default class Service {
  private ghToken?: string;

  constructor(ghToken?: string) {
    this.ghToken = ghToken;
  }

  select(...fields: string[]) {
  }
}