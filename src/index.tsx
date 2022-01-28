import { render } from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
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

render(<App />, document.getElementById(`root`));
