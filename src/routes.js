// src/routes.js

import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';

const routes = [
  { path: '/', component: Scene1, exact: true },
  { path: '/Scene1', component: Scene2, exact: true},
];

export default routes;
