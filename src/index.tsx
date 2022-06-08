import { render } from 'react-dom';

import { makeServer } from '@services/miragejs';

import { App } from './App';

if (process.env.NODE_ENV === `development`) {
  makeServer({ environment: `development` });
}

render(<App />, document.getElementById(`root`));
