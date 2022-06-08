import { createServer } from 'miragejs';

export function makeServer({ environment = `test` }) {
  const server = createServer({
    environment,

    routes() {
      this.namespace = `api`;

      this.get(`transactions`, () => [
        {
          id: 1,
          title: `Transaction 1`,
          amount: 100,
          type: `deposit`,
          category: `Food`,
          createAt: new Date(),
        },
      ]);
    },
  });

  return server;
}
