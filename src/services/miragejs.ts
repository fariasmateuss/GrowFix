import { createServer, Model } from 'miragejs';

export function makeServer({ environment = `development` } = {}) {
  return createServer({
    environment,
    models: {
      transaction: Model,
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: `Freelancer React.js`,
            type: `deposit`,
            category: `Dev`,
            amount: 6000,
            createdAt: new Date(`2021-02-12 09:00:00`),
          },
          {
            id: 2,
            title: `Rent`,
            type: `withdraw`,
            category: `Home`,
            amount: 1100,
            createdAt: new Date(`2021-02-12 09:00:00`),
          },
        ],
      });
    },
    routes() {
      this.namespace = `api`;

      this.get(`/transactions`, () => this.schema.all(`transaction`));

      this.post(`/transactions`, (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create(`transaction`, data);
      });
    },
  });
}
