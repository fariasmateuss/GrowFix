import { createServer, Model } from 'miragejs';

export function makeServer({ environment = `development` } = {}) {
  return createServer({
    environment,
    models: {
      transactions: Model,
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
          {
            id: 3,
            title: `Freelancer Node.js`,
            type: `deposit`,
            category: `Dev`,
            amount: 7000,
            createdAt: new Date(`2021-02-12 09:00:00`),
          },
        ],
      });
    },
    routes() {
      this.namespace = `api`;

      this.get(`/transactions`, schema => schema.all(`transactions`));

      this.get(`/transactions/:title`, (schema, request) => {
        const { title } = request.params;

        return schema.find(`transactions`, title);
      });

      this.post(`/transactions`, (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create(`1`, data);
      });
    },
  });
}
