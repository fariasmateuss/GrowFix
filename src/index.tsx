/* eslint-disable import/no-unresolved */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';

import { makeServer } from '@services/miragejs';

import { App } from './App';

if (process.env.NODE_ENV === `development` || process.env.REACT_APP_DEMO) {
  makeServer();
}

render(<App />, document.getElementById(`root`));
