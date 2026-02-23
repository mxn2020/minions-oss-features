/**
 * Minions Oss-features SDK
 *
 * Feature backlog, daily picks, implementation plans, and acceptance criteria
 *
 * @module @minions-oss-features/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Oss-features.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
