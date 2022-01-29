import * as service from './src/server';

async function setup() {
  await service.start();
}

export default setup;
