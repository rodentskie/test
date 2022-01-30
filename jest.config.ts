import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    globalSetup: './jest.setup.ts',
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    globalTeardown: './jest.teardown.ts',
    testTimeout: 10000,
  };
};
