import { environment } from '../config/environment';
import { TestUser, UserOverrides } from '../types/user.types';



export function createTestUser(overrides: UserOverrides = {}): TestUser {
    return {
        username: 'standard_user',
        password: environment.defaultPassword,
        role: 'customer',
        ...overrides,
    };
}