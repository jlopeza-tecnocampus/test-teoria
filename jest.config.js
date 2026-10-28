export default {
    testEnvironment: 'jest-fixed-jsdom',
    //setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: { '^.+\\.tsx?$': ['ts-jest',
            { tsconfig: 'tsconfig.test.json' }] },
    moduleNameMapper: {
        '\\.(css|svg)$': 'identity-obj-proxy' },
    testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', '!src/**/*.d.ts', '!src/main.tsx'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'html'],
}
