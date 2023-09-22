import * as Bun from 'bun';

export class Server {
  #instance?: Bun.Server;

  constructor() {}

  serve(port?: number) {
    this.#instance = Bun.serve({
      port,
      fetch: this.#fetch,
    });

    console.info(`🚀 http://${this.#instance.hostname}:${this.#instance.port}`);
  }

  #fetch = (request: Request) => {
    return new Response('YO');
  };
}
