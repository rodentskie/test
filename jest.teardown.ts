import * as service from './src/server';

async function setup() {
  await service.stop();
}

export default setup;
