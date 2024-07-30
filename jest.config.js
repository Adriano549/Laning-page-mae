export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@img/(.*)$': '<rootDir>/src/img/$1',
        '^@aparelhosArray/(.*)$': '<rootDir>/src/aparelhos-array/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};